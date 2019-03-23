import "dotenv/config";
import express from "express";
import mongoose from "mongoose";

const {
  MONGO_USER,
  MONGO_PASSWORD,
  MONGO_PATH
} = process.env;

class App {
  public app: express.Application;

  constructor() {
    this.app = express();
    mongoose.connect(`mongodb://${MONGO_USER}:${MONGO_PASSWORD}@${MONGO_PATH}`);
  }
}

export default new App().app;
