import type { Request, Response } from "express";
import type { CreateBodyPartInput } from "../schema/bodyPart.schema";
import { createBodyPart } from "../service/bodyPart.service";

export const createBodyPartHandler = async (
  req: Request<
    Record<string, never>,
    Record<string, never>,
    CreateBodyPartInput["body"]
  >,
  res: Response
) => {
  try {
    const bodyPart = await createBodyPart(req.body);
    return res.json(bodyPart);
  } catch (e: any) {
    return res.status(400).send(e);
  }
};
