import type { GameDocument } from "../model/game.model";
import Game from "../model/game.model";
import Workout from "../model/workout.model";
import logger from "../utils/logger";

export const createGame = async (
  input: Omit<GameDocument, "createdAt" | "updatedAt">
) => {
  try {
    const game = await Game.create(input).then((game) =>
      game.save().then((game) => {
        Workout.findByIdAndUpdate(
          game.workout,
          { $push: { games: game._id } },
          { new: true }
        )
          .populate("games")
          .then((workout) => {
            logger.info("Updated workout: ", workout);
          })
          .catch((e) => {
            throw new Error(e);
          });
      })
    );
    return game;
  } catch (e: any) {
    throw new Error(e);
  }
};
