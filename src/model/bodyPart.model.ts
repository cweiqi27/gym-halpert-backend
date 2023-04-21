import { Schema, model } from "mongoose";
import type { Document } from "mongoose";

export interface BodyPartDocument extends Partial<Document> {
  name: string;
  description?: string | null;
  image?: string | null;
  createdAt: Date;
  updatedAt: Date;
}

const bodyPartSchema = new Schema<BodyPartDocument>({
  name: { type: String, required: true, unique: true },
  description: String,
  image: String,
  createdAt: { type: Date, default: Date.now() },
  updatedAt: { type: Date, default: Date.now() },
});

const BodyPart = model("BodyPart", bodyPartSchema);

export default BodyPart;
