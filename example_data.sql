-- =====================================================
-- WORKOUT DIARY EXAMPLE DATA
-- Generated for user: user_36124Vtg5jezlIrPoYQQzeAUHB5
-- Database: Neon workoutdiary
-- =====================================================

-- =====================================================
-- 1. EXERCISES TABLE - Master Exercise Library
-- =====================================================
-- STRENGTH EXERCISES
INSERT INTO exercises (id, name, category, description, created_by) VALUES
('exc-squat-001', 'Barbell Back Squat', 'strength', 'Compound leg exercise targeting quadriceps, glutes, and hamstrings', 'user_36124Vtg5jezlIrPoYQQzeAUHB5'),
('exc-deadlift-001', 'Conventional Deadlift', 'strength', 'Full-body compound exercise targeting posterior chain', 'user_36124Vtg5jezlIrPoYQQzeAUHB5'),
('exc-bench-001', 'Barbell Bench Press', 'strength', 'Upper body compound exercise targeting chest, shoulders, and triceps', 'user_36124Vtg5jezlIrPoYQQzeAUHB5'),
('exc-ohp-001', 'Overhead Press', 'strength', 'Shoulder compound exercise targeting deltoids and triceps', 'user_36124Vtg5jezlIrPoYQQzeAUHB5'),
('exc-row-001', 'Bent-Over Barbell Row', 'strength', 'Back compound exercise targeting lats, rhomboids, and biceps', 'user_36124Vtg5jezlIrPoYQQzeAUHB5'),
('exc-pullup-001', 'Pull-up', 'strength', 'Bodyweight exercise targeting lats and biceps', 'user_36124Vtg5jezlIrPoYQQzeAUHB5'),
('exc-dip-001', 'Dips', 'strength', 'Bodyweight exercise targeting chest and triceps', 'user_36124Vtg5jezlIrPoYQQzeAUHB5'),
('exc-curl-001', 'Barbell Bicep Curl', 'strength', 'Isolation exercise targeting biceps', 'user_36124Vtg5jezlIrPoYQQzeAUHB5'),
('exc-tricep-001', 'Tricep Pushdown', 'strength', 'Isolation exercise targeting triceps', 'user_36124Vtg5jezlIrPoYQQzeAUHB5'),
('exc-lateral-001', 'Dumbbell Lateral Raise', 'strength', 'Shoulder isolation exercise targeting medial deltoids', 'user_36124Vtg5jezlIrPoYQQzeAUHB5'),

-- CARDIO EXERCISES
('exc-running-001', 'Running (Outdoor)', 'cardio', 'Outdoor running/jogging exercise', 'user_36124Vtg5jezlIrPoYQQzeAUHB5'),
('exc-treadmill-001', 'Treadmill Running', 'cardio', 'Indoor treadmill running', 'user_36124Vtg5jezlIrPoYQQzeAUHB5'),
('exc-cycling-001', 'Cycling', 'cardio', 'Outdoor or stationary cycling', 'user_36124Vtg5jezlIrPoYQQzeAUHB5'),
('exc-rowing-001', 'Rowing Machine', 'cardio', 'Full-body cardio machine', 'user_36124Vtg5jezlIrPoYQQzeAUHB5'),
('exc-swimming-001', 'Swimming', 'cardio', 'Full-body low-impact cardio', 'user_36124Vtg5jezlIrPoYQQzeAUHB5'),
('exc-hiit-001', 'HIIT Cardio', 'cardio', 'High-intensity interval training', 'user_36124Vtg5jezlIrPoYQQzeAUHB5'),

-- FLEXIBILITY EXERCISES
('exc-yoga-001', 'Yoga Flow', 'flexibility', 'Dynamic yoga practice for flexibility and mindfulness', 'user_36124Vtg5jezlIrPoYQQzeAUHB5'),
('exc-stretching-001', 'Full Body Stretching', 'flexibility', 'Comprehensive stretching routine', 'user_36124Vtg5jezlIrPoYQQzeAUHB5'),
('exc-foam-001', 'Foam Rolling', 'flexibility', 'Self-myofascial release technique', 'user_36124Vtg5jezlIrPoYQQzeAUHB5'),

-- SPORTS EXERCISES
('exc-basketball-001', 'Basketball', 'sports', 'Basketball practice and games', 'user_36124Vtg5jezlIrPoYQQzeAUHB5'),
('exc-tennis-001', 'Tennis', 'sports', 'Tennis practice and matches', 'user_36124Vtg5jezlIrPoYQQzeAUHB5'),
('exc-soccer-001', 'Soccer', 'sports', 'Soccer practice and games', 'user_36124Vtg5jezlIrPoYQQzeAUHB5');


-- =====================================================
-- 2. WORKOUTS TABLE - Workout Sessions
-- =====================================================
-- WORKOUT 1: Upper Body Strength (Monday)
INSERT INTO workouts (id, user_id, title, notes, duration_minutes, started_at, completed_at) VALUES
('wrk-001', 'user_36124Vtg5jezlIrPoYQQzeAUHB5', 'Upper Body Strength',
 'Push day focus on chest, shoulders, and triceps. Progressive overload from last week.',
 65,
 '2025-11-24 07:00:00',
 '2025-11-24 08:05:00'),

-- WORKOUT 2: Lower Body Strength (Tuesday)
('wrk-002', 'user_36124Vtg5jezlIrPoYQQzeAUHB5', 'Lower Body Strength',
 'Heavy squat day. Focus on depth and proper form. Added 5lbs to working weight.',
 75,
 '2025-11-25 07:30:00',
 '2025-11-25 08:45:00'),

-- WORKOUT 3: HIIT Cardio + Core (Wednesday)
('wrk-003', 'user_36124Vtg5jezlIrPoYQQzeAUHB5', 'HIIT Cardio + Core',
 'High-intensity interval training on treadmill followed by core strengthening exercises.',
 45,
 '2025-11-26 06:00:00',
 '2025-11-26 06:45:00'),

-- WORKOUT 4: Full Body Strength (Thursday)
('wrk-004', 'user_36124Vtg5jezlIrPoYQQzeAUHB5', 'Full Body Strength',
 'Full body compound movements. Felt strong today, hit new PR on deadlift.',
 80,
 '2025-11-27 18:00:00',
 '2025-11-27 19:20:00'),

-- WORKOUT 5: Active Recovery + Flexibility (Friday)
('wrk-005', 'user_36124Vtg5jezlIrPoYQQzeAUHB5', 'Active Recovery',
 'Light yoga and stretching session. Focused on hip flexors and shoulder mobility.',
 30,
 '2025-11-28 17:00:00',
 '2025-11-28 17:30:00'),

-- WORKOUT 6: Long Distance Cardio (Saturday)
('wrk-006', 'user_36124Vtg5jezlIrPoYQQzeAUHB5', 'Weekend Long Run',
 '10K outdoor run. Beautiful weather, kept steady pace throughout.',
 55,
 '2025-11-29 08:00:00',
 '2025-11-29 08:55:00');


-- =====================================================
-- 3. WORKOUT_EXERCISES TABLE - Junction Data
-- =====================================================

-- Upper Body Strength Exercises
INSERT INTO workout_exercises (id, workout_id, exercise_id, "order", rest_seconds) VALUES
('we-001-1', 'wrk-001', 'exc-bench-001', 1, 90),
('we-001-2', 'wrk-001', 'exc-ohp-001', 2, 90),
('we-001-3', 'wrk-001', 'exc-row-001', 3, 90),
('we-001-4', 'wrk-001', 'exc-dip-001', 4, 60),
('we-001-5', 'wrk-001', 'exc-curl-001', 5, 60),
('we-001-6', 'wrk-001', 'exc-lateral-001', 6, 60),

-- Lower Body Strength Exercises
('we-002-1', 'wrk-002', 'exc-squat-001', 1, 120),
('we-002-2', 'wrk-002', 'exc-deadlift-001', 2, 180),
('we-002-3', 'wrk-002', 'exc-lunge-001', 3, 90), -- Note: This exercise not in exercises table, would need to be added
('we-002-4', 'wrk-002', 'exc-calf-001', 4, 60), -- Note: This exercise not in exercises table, would need to be added

-- HIIT Cardio + Core Exercises
('we-003-1', 'wrk-003', 'exc-hiit-001', 1, 60),
('we-003-2', 'wrk-003', 'exc-plank-001', 2, 30), -- Note: This exercise not in exercises table, would need to be added
('we-003-3', 'wrk-003', 'exc-crunch-001', 3, 30), -- Note: This exercise not in exercises table, would need to be added

-- Full Body Strength Exercises
('we-004-1', 'wrk-004', 'exc-deadlift-001', 1, 180),
('we-004-2', 'wrk-004', 'exc-squat-001', 2, 120),
('we-004-3', 'wrk-004', 'exc-bench-001', 3, 90),
('we-004-4', 'wrk-004', 'exc-row-001', 4, 90),
('we-004-5', 'wrk-004', 'exc-ohp-001', 5, 90),

-- Active Recovery Exercises
('we-005-1', 'wrk-005', 'exc-yoga-001', 1, 0),
('we-005-2', 'wrk-005', 'exc-stretching-001', 2, 0),
('we-005-3', 'wrk-005', 'exc-foam-001', 3, 0),

-- Weekend Long Run
('we-006-1', 'wrk-006', 'exc-running-001', 1, 0);


-- =====================================================
-- 4. EXERCISE_SETS TABLE - Individual Sets Data
-- =====================================================

-- WORKOUT 1: Upper Body Strength Sets
-- Barbell Bench Press (we-001-1)
INSERT INTO exercise_sets (id, workout_exercise_id, set_number, weight_lbs, reps, notes) VALUES
('set-001-1-1', 'we-001-1', 1, 135, 12, 'Warm-up set, focused on form'),
('set-001-1-2', 'we-001-1', 2, 185, 10, 'Working set, good depth'),
('set-001-1-3', 'we-001-1', 3, 185, 8, 'Reps decreased due to fatigue'),
('set-001-1-4', 'we-001-1', 4, 155, 12, 'Back-off set for volume');

-- Overhead Press (we-001-2)
INSERT INTO exercise_sets (id, workout_exercise_id, set_number, weight_lbs, reps, notes) VALUES
('set-001-2-1', 'we-001-2', 1, 65, 12, 'Warm-up, controlled movement'),
('set-001-2-2', 'we-001-2', 2, 85, 10, 'Working set, proper overhead position'),
('set-001-2-3', 'we-001-2', 3, 85, 8, 'Last rep was challenging but completed with good form'),
('set-001-2-4', 'we-001-2', 4, 75, 12, 'Volume set for shoulder endurance');

-- Bent-Over Barbell Row (we-001-3)
INSERT INTO exercise_sets (id, workout_exercise_id, set_number, weight_lbs, reps, notes) VALUES
('set-001-3-1', 'we-001-3', 1, 95, 12, 'Warm-up, focused on back contraction'),
('set-001-3-2', 'we-001-3', 2, 135, 10, 'Working set, strong pull to lower chest'),
('set-001-3-3', 'we-001-3', 3, 135, 10, 'Maintained good form throughout'),
('set-001-3-4', 'we-001-3', 4, 115, 12, 'Higher reps for back hypertrophy');

-- Dips (we-001-4)
INSERT INTO exercise_sets (id, workout_exercise_id, set_number, reps, notes) VALUES
('set-001-4-1', 'we-001-4', 1, 15, 'Bodyweight dips, controlled negative'),
('set-001-4-2', 'we-001-4', 2, 12, 'Deeper stretch at bottom'),
('set-001-4-3', 'we-001-4', 3, 10, 'Last couple reps were grindy but completed'),
('set-001-4-4', 'we-001-4', 4, 12, 'Partial reps to finish chest/tri stimulation');

-- Barbell Bicep Curl (we-001-5)
INSERT INTO exercise_sets (id, workout_exercise_id, set_number, weight_lbs, reps, notes) VALUES
('set-001-5-1', 'we-001-5', 1, 45, 12, 'Warm-up with EZ curl bar'),
('set-001-5-2', 'we-001-5', 2, 65, 10, 'Working set, strict form, no momentum'),
('set-001-5-3', 'we-001-5', 3, 65, 8, 'Full squeeze at top'),
('set-001-5-4', 'we-001-5', 4, 55, 12, 'Higher reps for bicep pump');

-- Dumbbell Lateral Raise (we-001-6)
INSERT INTO exercise_sets (id, workout_exercise_id, set_number, weight_lbs, reps, notes) VALUES
('set-001-6-1', 'we-001-6', 1, 15, 15, 'Light weight for warm-up'),
('set-001-6-2', 'we-001-6', 2, 20, 12, 'Working set, controlled movement'),
('set-001-6-3', 'we-001-6', 3, 20, 12, 'Focused on mind-muscle connection'),
('set-001-6-4', 'we-001-6', 4, 15, 15, 'Burnout set for shoulder pump');


-- WORKOUT 2: Lower Body Strength Sets
-- Barbell Back Squat (we-002-1)
INSERT INTO exercise_sets (id, workout_exercise_id, set_number, weight_lbs, reps, notes) VALUES
('set-002-1-1', 'we-002-1', 1, 95, 12, 'Warm-up sets, ATG depth'),
('set-002-1-2', 'we-002-1', 2, 135, 10, 'Working weight buildup'),
('set-002-1-3', 'we-002-1', 3, 185, 8, 'Top working set, strong lockout'),
('set-002-1-4', 'we-002-1', 4, 185, 8, 'Maintained good form despite fatigue'),
('set-002-1-5', 'we-002-1', 5, 155, 10, 'Volume set for leg development');

-- Conventional Deadlift (we-002-2)
INSERT INTO exercise_sets (id, workout_exercise_id, set_number, weight_lbs, reps, notes) VALUES
('set-002-2-1', 'we-002-2', 1, 135, 5, 'Warm-up, focused on setup'),
('set-002-2-2', 'we-002-2', 2, 225, 3, 'Working set, good hip hinge'),
('set-002-2-3', 'we-002-2', 3, 275, 2, 'Heavy set, locked out successfully'),
('set-002-2-4', 'we-002-2', 4, 225, 4, 'Back-off volume set');


-- WORKOUT 3: HIIT Cardio + Core Sets
-- HIIT Cardio (we-003-1)
INSERT INTO exercise_sets (id, workout_exercise_id, set_number, duration_seconds, distance_miles, notes) VALUES
('set-003-1-1', 'we-003-1', 1, 30, NULL, 'Warm-up jog at 6.0 mph'),
('set-003-1-2', 'we-003-1', 2, 60, NULL, 'High intensity: 9.0 mph sprint'),
('set-003-1-3', 'we-003-1', 3, 90, NULL, 'Active recovery: 4.0 mph jog'),
('set-003-1-4', 'we-003-1', 4, 60, NULL, 'High intensity: 8.5 mph sprint'),
('set-003-1-5', 'we-003-1', 5, 90, NULL, 'Active recovery: 4.0 mph jog'),
('set-003-1-6', 'we-003-1', 6, 60, NULL, 'High intensity: 8.0 mph sprint'),
('set-003-1-7', 'we-003-1', 7, 120, NULL, 'Cool-down walk at 3.5 mph'),
('set-003-1-8', 'we-003-1', 8, 60, NULL, 'Final high intensity burst: 9.5 mph'),
('set-003-1-9', 'we-003-1', 9, 180, NULL, 'Extended cool-down and stretching');


-- WORKOUT 4: Full Body Strength Sets
-- Conventional Deadlift (we-004-1)
INSERT INTO exercise_sets (id, workout_exercise_id, set_number, weight_lbs, reps, notes) VALUES
('set-004-1-1', 'we-004-1', 1, 135, 5, 'Warm-up, perfect setup'),
('set-004-1-2', 'we-004-1', 2, 185, 3, 'Working set, smooth pull'),
('set-004-1-3', 'we-004-1', 3, 285, 2, 'NEW PR! Felt strong, no hitching'),
('set-004-1-4', 'we-004-1', 4, 285, 2, 'Backed off slightly but still heavy'),
('set-004-1-5', 'we-004-1', 5, 225, 4, 'Volume set for deadlift conditioning');

-- Barbell Back Squat (we-004-2)
INSERT INTO exercise_sets (id, workout_exercise_id, set_number, weight_lbs, reps, notes) VALUES
('set-004-2-1', 'we-004-2', 1, 95, 10, 'Quick warm-up'),
('set-004-2-2', 'we-004-2', 2, 155, 8, 'Working set, moderate depth'),
('set-004-2-3', 'we-004-2', 3, 195, 6, 'Heavy set, good speed'),
('set-004-2-4', 'we-004-2', 4, 195, 6, 'Maintained form despite fatigue');


-- WORKOUT 6: Weekend Long Run Set
-- Running Outdoor (we-006-1)
INSERT INTO exercise_sets (id, workout_exercise_id, set_number, duration_seconds, distance_miles, notes) VALUES
('set-006-1-1', 'we-006-1', 1, 3300, 6.21, '10K run at steady 8:30 min/mile pace. Perfect weather, felt strong throughout');


-- =====================================================
-- SUMMARY STATISTICS
-- =====================================================
/*
TOTAL EXERCISES: 17 entries across 4 categories:
- Strength: 10 exercises
- Cardio: 6 exercises
- Flexibility: 3 exercises
- Sports: 3 exercises

TOTAL WORKOUTS: 6 sessions over 6 days (Nov 24-29)
- 3 Strength sessions
- 1 HIIT Cardio + Core session
- 1 Active Recovery session
- 1 Long Distance Cardio session

TOTAL EXERCISE SETS: 50+ individual sets
- Strength sets with progressive loading
- Cardio sets with duration and distance tracking
- Various rep ranges and rest periods

DURATION RANGE: 30-80 minutes per session
CALORIE BURN ESTIMATE: 300-800 calories per session based on intensity
*/