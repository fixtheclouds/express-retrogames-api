import mongoose, { Schema } from "mongoose";

const schema = new Schema({
  created_at: Date,
  platform: {
    ref: "Platform",
    type: Schema.Types.ObjectId
  },
  title: String
});

export const Game = mongoose.model("Game", schema);
