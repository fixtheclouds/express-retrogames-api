import { Schema, model } from 'mongoose';

export interface IPlatform {
  year: number;
  name: string;
  manufacturer: string;
}

const schema = new Schema<IPlatform>({
  year: {
    type: Number,
    required: true,
  },
  name: {
    type: String,
    required: true
  },
  manufacturer: {
    type: String,
    required: true
  }
});

export default model('Platform', schema);
