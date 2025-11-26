export interface Workout {
  id: string;
  user_id: string;
  title: string;
  notes?: string;
  duration_minutes?: number;
  started_at: Date;
  completed_at?: Date;
  exercises?: Exercise[];
}

export interface Exercise {
  id: string;
  workout_id: string;
  name: string;
  order_index: number;
  sets?: ExerciseSet[];
}

export interface ExerciseSet {
  id: string;
  exercise_id: string;
  reps: number;
  weight_kg?: number;
  weight_lbs?: number;
  distance_m?: number;
  duration_seconds?: number;
  rest_seconds?: number;
  order_index: number;
}

// Legacy interface for backward compatibility
export interface Set {
  id: string;
  reps: number;
  weight?: number; // in kg or lbs
  distance?: number; // for cardio exercises
  duration?: number; // in seconds for timed exercises
  restTime?: number; // in seconds after this set
}

export type WorkoutType = 'strength' | 'cardio' | 'flexibility' | 'sports';

export interface WorkoutSummary {
  totalWorkouts: number;
  totalDuration: number;
  totalExercises: number;
  totalSets: number;
  totalVolume: number; // sum of weight × reps for all sets
}