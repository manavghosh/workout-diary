import {
  pgTable,
  uuid,
  text,
  integer,
  decimal,
  timestamp,
  pgEnum,
} from 'drizzle-orm/pg-core';

export const exerciseCategoryEnum = pgEnum('exercise_category', [
  'strength',
  'cardio',
  'flexibility',
  'sports',
]);

// Exercises table - master exercise library
export const exercises = pgTable('exercises', {
  id: uuid('id').primaryKey().defaultRandom(),
  name: text('name').notNull(),
  category: exerciseCategoryEnum('category').notNull(),
  description: text('description'),
  createdBy: uuid('created_by'),
  createdAt: timestamp('created_at').defaultNow().notNull(),
});

// Workouts table - workout sessions
export const workouts = pgTable('workouts', {
  id: uuid('id').primaryKey().defaultRandom(),
  userId: uuid('user_id').notNull(),
  title: text('title').notNull(),
  notes: text('notes'),
  durationMinutes: integer('duration_minutes'),
  startedAt: timestamp('started_at').defaultNow().notNull(),
  completedAt: timestamp('completed_at'),
});

// Workout Exercises junction table - links workouts to exercises
export const workoutExercises = pgTable('workout_exercises', {
  id: uuid('id').primaryKey().defaultRandom(),
  workoutId: uuid('workout_id')
    .notNull()
    .references(() => workouts.id, { onDelete: 'cascade' }),
  exerciseId: uuid('exercise_id')
    .notNull()
    .references(() => exercises.id),
  order: integer('order').notNull(),
  restSeconds: integer('rest_seconds'),
});

// Exercise Sets table - individual sets for each exercise
export const exerciseSets = pgTable('exercise_sets', {
  id: uuid('id').primaryKey().defaultRandom(),
  workoutExerciseId: uuid('workout_exercise_id')
    .notNull()
    .references(() => workoutExercises.id, { onDelete: 'cascade' }),
  setNumber: integer('set_number').notNull(),
  // Strength exercise fields
  weightLbs: decimal('weight_lbs', { precision: 8, scale: 2 }),
  reps: integer('reps'),
  // Cardio exercise fields
  durationSeconds: integer('duration_seconds'),
  distanceMiles: decimal('distance_miles', { precision: 8, scale: 2 }),
  notes: text('notes'),
});

// Export types for TypeScript usage
export type Exercise = typeof exercises.$inferSelect;
export type NewExercise = typeof exercises.$inferInsert;
export type Workout = typeof workouts.$inferSelect;
export type NewWorkout = typeof workouts.$inferInsert;
export type WorkoutExercise = typeof workoutExercises.$inferSelect;
export type NewWorkoutExercise = typeof workoutExercises.$inferInsert;
export type ExerciseSet = typeof exerciseSets.$inferSelect;
export type NewExerciseSet = typeof exerciseSets.$inferInsert;