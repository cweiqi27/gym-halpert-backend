import { Schema, model } from "mongoose";
import type { Document } from "mongoose";
import type { ExerciseDocument } from "./exercise.model";
import type { WorkoutDocument } from "./workout.model";
import type { SetDocument } from "./set.model";
import { setSchema } from "./set.model";

export interface GameDocument extends Partial<Document> {
  exercise: ExerciseDocument["_id"];
  sets: SetDocument[];
  duration?: number;
  workout: WorkoutDocument["_id"];
  createdAt: Date;
  updatedAt: Date;
}

const gameSchema = new Schema<GameDocument>({
  exercise: { type: Schema.Types.ObjectId, ref: "Exercise", required: true },
  sets: [setSchema],
  duration: Number,
  workout: { type: Schema.Types.ObjectId, ref: "Workout", required: true },
  createdAt: { type: Date, default: Date.now() },
  updatedAt: { type: Date, default: Date.now() },
});

const Game = model<GameDocument>("Game", gameSchema);

export default Game;
