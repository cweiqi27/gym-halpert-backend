import type { ExerciseDocument } from "../model/exercise.model";
import Exercise from "../model/exercise.model";

export const createExercise = async (
  input: Omit<ExerciseDocument, "createdAt" | "updatedAt">
) => {
  try {
    return await Exercise.create(input);
  } catch (e: any) {
    throw new Error(e);
  }
};
