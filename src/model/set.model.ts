import { Schema, model } from "mongoose";
import type { Document } from "mongoose";
import type { SetType } from "../types/typeEnums.types";
import { SetTypeArr } from "../types/typeEnums.types";

export interface SetDocument extends Partial<Document> {
  type: SetType;
  weight?: number;
  reps?: number;
}

export const setSchema = new Schema<SetDocument>({
  type: {
    type: String,
    enum: SetTypeArr,
    required: true,
  },
  weight: { type: Number, default: 0 },
  reps: { type: Number, default: 0 },
});

const Set = model<SetDocument>("Set", setSchema);

export default Set;
