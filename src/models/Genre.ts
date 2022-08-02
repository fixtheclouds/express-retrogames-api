import mongoose, { Schema } from 'mongoose';

const schema = new Schema({
  name: {
    type: String,
    required: true
  },
  games: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Game'
  }
});

export default mongoose.model('Genre', schema);
