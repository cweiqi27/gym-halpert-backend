import type { Express } from "express";
import { createUserHandler } from "../controller/user.controller";
import validateResource from "../middleware/validateResource";
import { createUserSchema } from "../schema/user.schema";

export const userRoutes = (app: Express) => {
  app.post(
    "/api/create-user",
    validateResource(createUserSchema),
    createUserHandler
  );
};
