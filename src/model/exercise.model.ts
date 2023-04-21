import { Schema, model } from "mongoose";
import type { Document } from "mongoose";
import type { BodyPartDocument } from "./bodyPart.model";

export interface ExerciseDocument extends Partial<Document> {
  name: string;
  description?: string | null;
  image?: string | null;
  bodyParts: BodyPartDocument["_id"][];
  type: string;
  difficulty: number;
  createdAt: Date;
  updatedAt: Date;
}

const exerciseSchema = new Schema<ExerciseDocument>({
  name: { type: String, required: true, unique: true },
  description: String,
  image: String,
  bodyParts: [{ type: Schema.Types.ObjectId, required: true }],
  type: { type: String, required: true },
  difficulty: { type: Number, required: true },
  createdAt: { type: Date, default: Date.now() },
  updatedAt: { type: Date, default: Date.now() },
});

const Exercise = model("Exercise", exerciseSchema);

export default Exercise;
