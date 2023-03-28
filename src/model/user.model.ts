import type { Document } from "mongoose";
import { Schema, model } from "mongoose";
import { env } from "../schema/env.schema";
import bcrypt from "bcrypt";

export interface UserDocument extends Partial<Document> {
  name: string;
  email: string;
  password: string;
  image?: string | null;
  createdAt: Date;
  updatedAt: Date;
}

const userSchema = new Schema<UserDocument>({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  image: String,
  createdAt: Date,
  updatedAt: Date,
});

userSchema.pre("save", async function (next: (err?: Error) => void) {
  const _user = this as UserDocument;

  if (!_user.isModified) return next();

  const saltRounds = parseInt(env.SALT_ROUNDS);

  bcrypt.genSalt(saltRounds, function (err, salt) {
    _user.password = salt;
    return next(err);
  });
});

userSchema.method(
  "comparePassword",
  async function (candidatePassword: string) {
    return await bcrypt.compare(candidatePassword, this.password);
  }
);

const User = model("User", userSchema);

export default User;
