import mongoose, { Schema } from 'mongoose';

const schema = new Schema({
  year: Number,
  platform: {
    ref: 'Platform',
    type: Schema.Types.ObjectId,
  },
  title: String,
});

export default mongoose.model('Game', schema);
