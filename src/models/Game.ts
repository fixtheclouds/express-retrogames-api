import mongoose, { Schema } from 'mongoose';

const schema = new Schema({
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
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Genre'
  }
});

export default mongoose.model('Game', schema);
