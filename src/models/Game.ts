import { Schema, model, Document } from 'mongoose'

import IGenre from './Genre'
import IPlatform from './Platform'
interface IGame extends Document {
  year: number
  title: string
  platform: typeof IPlatform
  genres: typeof IGenre
}

const schema = new Schema<IGame>({
  year: {
    type: Number,
    required: true
  },
  platform: {
    ref: 'Platform',
    type: Schema.Types.ObjectId,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  genres: {
    type: Schema.Types.ObjectId,
    ref: 'Genre'
  }
})

export default model<IGame>('Game', schema)
