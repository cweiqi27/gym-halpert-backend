import { Schema, model } from "mongoose";
import type { Document } from "mongoose";
import type { UserDocument } from "./user.model";
import type { GameDocument } from "./game.model";
import type { WorkoutType } from "../types/typeEnums.types";
import { WorkoutTypeArr } from "../types/typeEnums.types";

export interface WorkoutDocument extends Partial<Document> {
  games?: GameDocument["_id"][];
  type: WorkoutType;
  duration?: number;
  notes?: string;
  user: UserDocument["_id"];
  createdAt: Date;
  updatedAt: Date;
}

const workoutSchema = new Schema<WorkoutDocument>({
  games: [{ type: Schema.Types.ObjectId, ref: "Game" }],
  type: { type: String, enum: WorkoutTypeArr, required: true },
  duration: { type: Number, default: 0 },
  notes: String,
  user: { type: Schema.Types.ObjectId, ref: "User", required: true },
  createdAt: { type: Date, default: Date.now() },
  updatedAt: { type: Date, default: Date.now() },
});

const Workout = model<WorkoutDocument>("Workout", workoutSchema);

export default Workout;
