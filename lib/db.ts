import { neon } from '@neondatabase/serverless';

const sql = neon(process.env.DATABASE_URL!);

export interface Workout {
  id: string;
  user_id: string;
  title: string;
  notes?: string;
  duration_minutes?: number;
  started_at: string;
  completed_at?: string;
}

export interface WorkoutExercise {
  id: string;
  workout_id: string;
  exercise_id: string;
  exercise?: Exercise;
  order: number;
  rest_seconds?: number;
  sets?: ExerciseSet[];
}

export interface Exercise {
  id: string;
  name: string;
  category: string;
  description?: string;
  created_by?: string;
  created_at?: string;
}

export interface ExerciseSet {
  id: string;
  exercise_id: string;
  reps?: number;
  weight_kg?: number;
  weight_lbs?: number;
  duration_seconds?: number;
  distance_m?: number;
  notes?: string;
}

export async function getWorkoutsByDate(userId: string, date: Date) {
  // Get the start and end of the selected date in UTC
  const startOfDay = new Date(date);
  startOfDay.setUTCHours(0, 0, 0, 0);

  const endOfDay = new Date(date);
  endOfDay.setUTCHours(23, 59, 59, 999);

  try {
    // First, get workouts for the user and date
    const workouts = await sql`
      SELECT
        id,
        user_id,
        title,
        notes,
        duration_minutes,
        started_at,
        completed_at
      FROM workouts
      WHERE user_id = ${userId}
        AND started_at >= ${startOfDay.toISOString()}
        AND started_at <= ${endOfDay.toISOString()}
      ORDER BY started_at DESC
    `;

    // For each workout, get the exercises and sets
    for (const workout of workouts as any) {
      const workoutExercises = await sql`
        SELECT
          we.id,
          we.workout_id,
          we.exercise_id,
          we.order,
          we.rest_seconds,
          e.name as exercise_name,
          e.category as exercise_category,
          e.created_by,
          e.created_at
        FROM workout_exercises we
        LEFT JOIN exercises e ON we.exercise_id = e.id
        WHERE we.workout_id = ${workout.id}
        ORDER BY we.order
      `;

      // For each workout exercise, get the sets
      for (const we of workoutExercises as any) {
        const sets = await sql`
          SELECT
            id,
            exercise_id,
            reps,
            weight_kg,
            weight_lbs,
            duration_seconds,
            distance_m,
            notes
          FROM exercise_sets
          WHERE exercise_id = ${we.exercise_id}
          ORDER BY id
        `;
        we.sets = sets;
        we.exercise = {
          id: we.exercise_id,
          name: we.exercise_name,
          category: we.exercise_category,
          created_by: we.created_by,
          created_at: we.created_at
        };
      }

      workout.workoutExercises = workoutExercises;
    }

    return workouts;
  } catch (error) {
    console.error('Error fetching workouts:', error);
    return [];
  }
}

export async function getWorkoutWithDetails(workoutId: string) {
  try {
    const workout = await sql`
      SELECT
        id,
        user_id,
        title,
        notes,
        duration_minutes,
        started_at,
        completed_at
      FROM workouts
      WHERE id = ${workoutId}
    `;

    if (!workout || workout.length === 0) {
      return null;
    }

    const workoutData = workout[0];

    const workoutExercises = await sql`
      SELECT
        we.id,
        we.workout_id,
        we.exercise_id,
        we.order,
        we.rest_seconds,
        e.name as exercise_name,
        e.category as exercise_category,
        e.description as exercise_description,
        e.created_by,
        e.created_at
      FROM workout_exercises we
      LEFT JOIN exercises e ON we.exercise_id = e.id
      WHERE we.workout_id = ${workoutId}
      ORDER BY we.order
    `;

    // Get sets for each exercise
    for (const we of workoutExercises as any) {
      const sets = await sql`
        SELECT
          id,
          exercise_id,
          reps,
          weight_kg,
          weight_lbs,
          duration_seconds,
          distance_m,
          notes
        FROM exercise_sets
        WHERE exercise_id = ${we.exercise_id}
        ORDER BY id
      `;
      we.sets = sets;
      we.exercise = {
        id: we.exercise_id,
        name: we.exercise_name,
        category: we.exercise_category,
        description: we.exercise_description,
        created_by: we.created_by,
        created_at: we.created_at
      };
    }

    workoutData.workoutExercises = workoutExercises;
    return workoutData;
  } catch (error) {
    console.error('Error fetching workout details:', error);
    return null;
  }
}