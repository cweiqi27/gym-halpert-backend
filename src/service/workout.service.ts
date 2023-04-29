import type { WorkoutDocument } from "../model/workout.model";
import Workout from "../model/workout.model";

export const createWorkout = async (
  input: Omit<WorkoutDocument, "createdAt" | "updatedAt">
) => {
  try {
    return await Workout.create(input);
  } catch (e: any) {
    throw new Error(e);
  }
};
