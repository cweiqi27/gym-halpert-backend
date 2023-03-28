import mongoose from "mongoose";
import { env } from "../schema/env.schema.js";

export const connectDB = async () => {
  const dbUri = env.DATABASE_URI;

  return await mongoose
    .connect(dbUri)
    .then(() => {
      console.log("😹 Connected to DB.");
    })
    .catch((e) => {
      console.error("😒 Error connecting to DB:\n" + e);
      process.exit(1);
    });
};
