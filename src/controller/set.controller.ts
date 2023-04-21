import type { Request, Response } from "express";
import logger from "../utils/logger";
import { createSet } from "../service/set.service";
import type { CreateSetInput } from "../schema/set.schema";

export const createSetHandler = async (
  req: Request<
    Record<string, never>,
    Record<string, never>,
    CreateSetInput["body"]
  >,
  res: Response
) => {
  try {
    const set = await createSet(req.body);
    return res.send(set);
  } catch (e: any) {
    logger.error(e);
    return res.send(e.message);
  }
};
