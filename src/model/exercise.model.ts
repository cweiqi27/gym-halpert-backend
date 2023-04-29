import { Schema, model } from "mongoose";
import type { Document } from "mongoose";
import type { BodyPartDocument } from "./bodyPart.model";
import type { EquipmentDocument } from "./equipment.model";

export interface ExerciseDocument extends Partial<Document> {
  name: string;
  description?: string;
  image?: string;
  bodyParts: BodyPartDocument["_id"][];
  equipment?: EquipmentDocument["_id"];
  difficulty: number;
  createdAt: Date;
  updatedAt: Date;
}

const exerciseSchema = new Schema<ExerciseDocument>({
  name: { type: String, required: true, unique: true },
  description: String,
  image: String,
  bodyParts: [{ type: Schema.Types.ObjectId, ref: "BodyPart", required: true }],
  equipment: { type: Schema.Types.ObjectId, ref: "Equipment" },
  difficulty: { type: Number, required: true },
  createdAt: { type: Date, default: Date.now() },
  updatedAt: { type: Date, default: Date.now() },
});

const Exercise = model("Exercise", exerciseSchema);

export default Exercise;
