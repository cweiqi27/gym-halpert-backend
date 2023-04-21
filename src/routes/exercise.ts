import type { Express } from "express";
import validateResource from "../middleware/validateResource";
import { createExerciseSchema } from "../schema/exercise.schema";
import { createBodyPartSchema } from "../schema/bodyPart.schema";
import { createBodyPartHandler } from "../controller/bodyPart.controller";
import { createExerciseHandler } from "../controller/exercise.controller";

export const exerciseRoutes = (app: Express) => {
  // create bodyPart
  app.post(
    "/api/body-parts/create",
    validateResource(createBodyPartSchema),
    createBodyPartHandler
  );

  // create exercise
  app.post(
    "/api/exercises/create",
    validateResource(createExerciseSchema),
    createExerciseHandler
  );
};
