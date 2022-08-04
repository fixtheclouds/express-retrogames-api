import { Schema, model } from 'mongoose';

export interface IUser {
  login: string;
  password: string;
  role: string;
  createdAt: Date;
}

const ROLES = ['user', 'admin'];

const schema = new Schema<IUser>({
  login: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  role: {
    type: String,
    default: 'user',
    enum: ROLES
  },
  createdAt: Date
});

export default model('User', schema);
