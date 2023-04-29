import type { Request, Response } from "express";
import logger from "../utils/logger";
import type { CreateWorkoutInput } from "../schema/workout.schema";
import { createWorkout } from "../service/workout.service";

export const createWorkoutHandler = async (
  req: Request<
    Record<string, never>,
    Record<string, never>,
    CreateWorkoutInput["body"]
  >,
  res: Response
) => {
  try {
    const workout = await createWorkout(req.body);
    return res.json(workout);
  } catch (e: any) {
    logger.error(e);
    return res.send(e.message);
  }
};
