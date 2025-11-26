"use client";

import { useState, useEffect } from "react";
import { format } from "date-fns";
import { ChevronRight, Plus, Dumbbell, Calendar as CalendarIcon } from "lucide-react";
import { getWorkoutsByDate } from "./actions";
import type { Workout } from "./actions";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Skeleton } from "@/components/ui/skeleton";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Calendar } from "@/components/ui/calendar";
import { formatDateWithOrdinal } from "@/lib/utils";

interface DashboardClientProps {
  userId: string;
}

export default function DashboardClient({ userId }: DashboardClientProps) {
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [workouts, setWorkouts] = useState<Workout[]>([]);
  const [loading, setLoading] = useState(true);

  // Fetch workouts for the selected date
  const fetchWorkouts = async (date: Date) => {
    setLoading(true);
    try {
      const workoutsData = await getWorkoutsByDate(userId, date);
      setWorkouts(workoutsData as Workout[]);
    } catch (error) {
      console.error("Error fetching workouts:", error);
      setWorkouts([]);
    } finally {
      setLoading(false);
    }
  };

  // Fetch workouts when component mounts or date changes
  useEffect(() => {
    fetchWorkouts(selectedDate);
  }, [userId, selectedDate]);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* Header with Date Picker */}
        <Card className="mb-6">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="text-3xl">
                Workout Dashboard
              </CardTitle>
              <Button>
                <Plus className="w-4 h-4 mr-2" />
                Log Workout
              </Button>
            </div>
          </CardHeader>

          {/* Date Picker Section */}
          <CardContent>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <CalendarIcon className="w-5 h-5 text-gray-500" />
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  Date:
                </span>
              </div>

              <Dialog open={showDatePicker} onOpenChange={setShowDatePicker}>
                <DialogTrigger asChild>
                  <Button variant="outline" className="min-w-[200px] justify-between">
                    <span className="font-medium">
                      {formatDateWithOrdinal(selectedDate)}
                    </span>
                    <ChevronRight className="w-4 h-4" />
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-sm p-0">
                  <DialogHeader className="p-6 pb-2">
                    <DialogTitle className="text-center">Select Date</DialogTitle>
                  </DialogHeader>
                  <div className="p-6">
                    <div className="flex justify-between mb-4">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => {
                          setSelectedDate(new Date());
                          setShowDatePicker(false);
                        }}
                      >
                        Today
                      </Button>
                      <div className="text-xs text-muted-foreground">
                        {format(new Date(), "MMMM yyyy")}
                      </div>
                    </div>
                    <Calendar
                      mode="single"
                      selected={selectedDate}
                      onSelect={(date) => {
                        if (date) {
                          setSelectedDate(date);
                          setShowDatePicker(false);
                        }
                      }}
                      disabled={(date) => {
                        // Disable dates in the future
                        return date > new Date();
                      }}
                      defaultMonth={selectedDate}
                      className="mx-auto"
                      initialFocus
                    />
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          </CardContent>
        </Card>

        {/* Workouts Summary */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-blue-100 dark:bg-blue-900 rounded-lg">
                  <Dumbbell className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Total Workouts</p>
                  <p className="text-2xl font-bold text-gray-900 dark:text-white">
                    {workouts.length}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-green-100 dark:bg-green-900 rounded-lg">
                  <Dumbbell className="w-5 h-5 text-green-600 dark:text-green-400" />
                </div>
                <div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Total Exercises</p>
                  <p className="text-2xl font-bold text-gray-900 dark:text-white">
                    {workouts.reduce((acc, workout) => acc + (workout.workoutExercises?.length || 0), 0)}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-purple-100 dark:bg-purple-900 rounded-lg">
                  <Dumbbell className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                </div>
                <div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Total Duration</p>
                  <p className="text-2xl font-bold text-gray-900 dark:text-white">
                    {workouts.reduce((acc, workout) => acc + (workout.duration_minutes || 0), 0)} min
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Workouts List */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
            Workouts for {formatDateWithOrdinal(selectedDate)}
          </h2>

          {loading ? (
            <Card className="p-12 text-center">
              <div className="flex flex-col items-center gap-4">
                <Skeleton className="h-12 w-12 rounded-full" />
                <Skeleton className="h-4 w-32" />
              </div>
            </Card>
          ) : workouts.length === 0 ? (
            <Card className="p-12 text-center">
              <div className="flex flex-col items-center gap-4">
                <Dumbbell className="w-12 h-12 text-gray-400" />
                <CardTitle className="text-lg">
                  No workouts logged
                </CardTitle>
                <CardDescription className="mb-6">
                  No workouts found for this date. Start by logging your first workout!
                </CardDescription>
                <Button>
                  Log Your First Workout
                </Button>
              </div>
            </Card>
          ) : (
            workouts.map((workout) => (
              <Card key={workout.id} className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                      {workout.title}
                    </h3>
                    <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
                      {workout.duration_minutes && (
                        <span>{workout.duration_minutes} minutes</span>
                      )}
                      <span>
                        Started: {format(new Date(workout.started_at), "h:mm a")}
                      </span>
                      {workout.completed_at && (
                        <span>
                          Completed: {format(new Date(workout.completed_at), "h:mm a")}
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="secondary" size="sm">
                      Edit
                    </Button>
                    <Button variant="destructive" size="sm">
                      Delete
                    </Button>
                  </div>
                </div>

                <div className="space-y-4">
                  {workout.workoutExercises?.map((workoutExercise) => (
                    <div
                      key={workoutExercise.id}
                      className="border-l-4 border-blue-500 pl-4 py-2"
                    >
                      <h4 className="font-medium text-gray-900 dark:text-white mb-2">
                        {workoutExercise.exercise?.name}
                      </h4>
                      {workoutExercise.sets && workoutExercise.sets.length > 0 && (
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
                          {workoutExercise.sets.map((set) => (
                            <div
                              key={set.id}
                              className="bg-gray-100 dark:bg-gray-700 rounded px-3 py-2 text-sm"
                            >
                              {set.weight_lbs && (
                                <span className="font-medium text-gray-900 dark:text-white">
                                  {parseFloat(set.weight_lbs.toString())} lbs
                                </span>
                              )}
                              <span className="text-gray-600 dark:text-gray-400">
                                {set.reps && ` ${set.reps} reps`}
                              </span>
                              {set.duration_seconds && (
                                <span className="text-gray-600 dark:text-gray-400">
                                  {" "}{set.duration_seconds}s
                                </span>
                              )}
                            </div>
                          ))}
                        </div>
                      )}
                      {workoutExercise.rest_seconds && (
                        <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                          Rest: {workoutExercise.rest_seconds}s
                        </p>
                      )}
                    </div>
                  ))}
                </div>

                {workout.notes && (
                  <div className="mt-4 pt-4">
                    <Separator className="mb-4" />
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      <span className="font-medium">Notes:</span> {workout.notes}
                    </p>
                  </div>
                )}
              </Card>
            ))
          )}
        </div>
      </div>
    </div>
  );
}