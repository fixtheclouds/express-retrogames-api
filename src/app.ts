import 'dotenv/config';
import express from 'express';
import mongoose from 'mongoose';

const {
  MONGO_PORT,
  MONGO_PASSWORD,
  MONGO_PATH,
  MONGO_USER,
} = process.env;

class App {
  public app: express.Application;

  constructor() {
    this.app = express();
    mongoose.set('debug', true)
    mongoose.connect(
      `mongodb://${MONGO_USER}:${MONGO_PASSWORD}@localhost:${MONGO_PORT}/${MONGO_PATH}?authSource=admin`,
      {
        useNewUrlParser: true,
        useFindAndModify: false,
        useCreateIndex: true,
      },
    );
  }
}

export default new App().app;
