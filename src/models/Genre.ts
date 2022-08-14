import { Schema, model } from 'mongoose'

export interface IGenre {
  name: string
}

const schema = new Schema<IGenre>({
  name: {
    type: String,
    required: true
  }
})

export default model<IGenre>('Genre', schema)
