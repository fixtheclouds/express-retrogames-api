import { Schema, model } from 'mongoose';

export interface IUser {
  login: string;
  password: string;
  role: string;
  secret: string;
  createdAt: Date;
  updatedAt: Date;
  lastSignInAt?: Date;
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
  secret: {
    type: String,
    required: true
  },
  lastSignInAt: Date
}, { timestamps: true });

export default model('User', schema);
