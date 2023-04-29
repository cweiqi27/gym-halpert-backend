import type { Express } from "express";
import { exerciseRoutes } from "./exercise";
import { clerkRoutes } from "./clerk";
import { workoutRoutes } from "./workout";

const routes = (app: Express) => {
  workoutRoutes(app);
  exerciseRoutes(app);
  clerkRoutes(app);
};

export default routes;
