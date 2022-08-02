import { Schema, model } from 'mongoose';

import IGame from './Game';

export interface IGenre {
  name: string;
  games: Array<typeof IGame>;
}

const schema = new Schema({
  name: {
    type: String,
    required: true
  },
  games: {
    type: Schema.Types.ObjectId,
    ref: 'Game'
  }
});

export default model('Genre', schema);
