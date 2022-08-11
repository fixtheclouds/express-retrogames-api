import { Schema, model } from 'mongoose'

import IGenre from './Genre'
import IPlatform from './Platform'
interface IGame {
  year: number
  title: string
  platform: typeof IPlatform
  genres: Array<typeof IGenre>
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

export default model('Game', schema)
