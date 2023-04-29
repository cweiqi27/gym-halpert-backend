import type { Request, Response } from "express";
import { createGame } from "../service/game.service";
import type { CreateGameInput } from "../schema/game.schema";

export const createGameHandler = async (
  req: Request<
    Record<string, never>,
    Record<string, never>,
    CreateGameInput["body"]
  >,
  res: Response
) => {
  try {
    const game = await createGame(req.body);
    return res.json(game);
  } catch (e) {
    res.status(400).send(e);
  }
};
