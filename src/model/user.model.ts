import type { Document } from "mongoose";
import { Schema, model } from "mongoose";

export interface UserDocument extends Partial<Document> {
  externalId: string;
  createdAt: Date;
  updatedAt: Date;
}

const userSchema = new Schema<UserDocument>({
  externalId: { type: String, unique: true },
  createdAt: { type: Date, default: Date.now() },
  updatedAt: { type: Date, default: Date.now() },
});

const User = model<UserDocument>("User", userSchema);

export default User;
