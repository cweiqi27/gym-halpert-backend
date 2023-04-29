import { Schema, model } from "mongoose";
import type { Document } from "mongoose";

export interface EquipmentDocument extends Partial<Document> {
  name: string;
  description?: string;
  image?: string;
  createdAt: Date;
  updatedAt: Date;
}

const equipmentSchema = new Schema<EquipmentDocument>({
  name: { type: String, required: true, unique: true },
  description: String,
  image: String,
  createdAt: { type: Date, default: Date.now() },
  updatedAt: { type: Date, default: Date.now() },
});

const Equipment = model("Equipment", equipmentSchema);

export default Equipment;
