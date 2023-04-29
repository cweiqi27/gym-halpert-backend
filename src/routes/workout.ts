import type { Express } from "express";
import { createWorkoutSchema } from "../schema/workout.schema";
import { createWorkoutHandler } from "../controller/workout.controller";
import validateResource from "../middleware/validateResource";
import { createGameSchema } from "../schema/game.schema";
import { createGameHandler } from "../controller/game.controller";

export const workoutRoutes = (app: Express) => {
  // create workout
  app.post(
    "/api/workouts/create",
    validateResource(createWorkoutSchema),
    createWorkoutHandler
  );

  // create game
  app.post(
    "/api/workouts/games/create",
    validateResource(createGameSchema),
    createGameHandler
  );

  //create set
  app.post(
    "/api/workouts/games/sets/create",
    validateResource(createGameSchema),
    createGameHandler
  );
};
