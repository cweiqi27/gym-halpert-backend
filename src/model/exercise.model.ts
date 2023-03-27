import mongoose from "mongoose";

const exerciseSchema = new mongoose.Schema({
  name: String,
  description: String,
  image: String,
  bodyPartId: String,
});

const Exercise = mongoose.model("Exercise", exerciseSchema);
