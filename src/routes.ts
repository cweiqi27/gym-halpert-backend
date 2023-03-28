import type { Express, Request, Response } from "express";
import { createUserHandler } from "./controller/user.controller";
import validateResource from "./middleware/validateResource";
import { createUserSchema } from "./schema/user.schema";

const routes = (app: Express) => {
  app.post(
    "/api/create-user",
    validateResource(createUserSchema),
    createUserHandler
  );
};

export default routes;
