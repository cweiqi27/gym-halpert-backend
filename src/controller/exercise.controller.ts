import type { Request, Response } from "express";
import { createExercise } from "../service/exercise.service";
import type { CreateExerciseInput } from "../schema/exercise.schema";

export const createExerciseHandler = (
  req: Request<
    Record<string, never>,
    Record<string, never>,
    CreateExerciseInput["body"]
  >,
  res: Response
) => {
  try {
    const exercise = createExercise(req.body);
    return res.json(exercise);
  } catch (e: any) {
    return res.status(400).send(e);
  }
};
