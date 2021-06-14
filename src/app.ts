import 'dotenv/config';
import express from 'express';
import mongoose from 'mongoose';

const {
  MONGO_PORT,
  MONGO_PATH,
} = process.env;

class App {
  public app: express.Application;

  constructor() {
    this.app = express();
    mongoose.connect(
      `mongodb://localhost:${MONGO_PORT}/${MONGO_PATH}`,
      {
        useNewUrlParser: true,
        useFindAndModify: false,
        useCreateIndex: true,
      },
    );
  }
}

export default new App().app;
