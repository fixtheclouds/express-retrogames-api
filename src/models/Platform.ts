import mongoose, { Schema } from 'mongoose';

const schema = new Schema({
  year: {
    type: Number,
    required: true,
  },
  name: {
    type: String,
    required: true
  }
});

export default mongoose.model('Platform', schema);
