import type { NextFunction, Request, Response } from "express";
import type { CreateUserInput } from "../schema/user.schema";
import { createUser } from "../service/user.service";
import logger from "../utils/logger";

export const createUserHandler = async (
  req: Request<
    Record<string, never>,
    Record<string, never>,
    CreateUserInput["body"]
  >,
  res: Response
) => {
  try {
    const user = await createUser(req.body);
    return res.send(user);
  } catch (e: any) {
    logger.error(e);
    return res.send(e.message);
  }
};
