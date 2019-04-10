import mongoose, { Schema } from "mongoose";

const schema = new Schema({
  created_at: Date,
  name: String
});

export const Platform = mongoose.model("Platform", schema);
