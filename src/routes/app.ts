import type { Express } from "express";
import { userRoutes } from "./user";

const routes = (app: Express) => {
  userRoutes(app);
};

export default routes;
