import mongoose, { Schema } from 'mongoose';

const schema = new Schema({
  created_at: Date,
  name: String,
});

export default mongoose.model('Platform', schema);
