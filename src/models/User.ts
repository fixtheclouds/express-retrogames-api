import bcrypt from 'bcrypt';
import { Schema, Document, model } from 'mongoose';

export interface IUser extends Document {
  login: string;
  password: string;
  role: string;
  secret: string;
  createdAt: Date;
  updatedAt: Date;
  lastSignInAt?: Date;
}

export interface IUserDocument extends IUser {
  logout(): Promise<boolean>;
  comparePasswords(candidatePassword: string): Promise<boolean>;
}

const ROLES = ['user', 'admin'];
const SALT_WORK_FACTOR = 10;
const SECRET_SALT_WORK_FACTOR = 6;

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
    required: false
  },
  lastSignInAt: Date
}, { timestamps: true });

function genereateSecret(): Promise<string> {
  return bcrypt.genSalt(SECRET_SALT_WORK_FACTOR);
}

schema.pre('save', async function (this: IUser) {
  if (this.isModified('password')) {
    this.password = await bcrypt.hash(this.password, SALT_WORK_FACTOR);
  }

  if (this.isNew) {
    this.secret = await genereateSecret();
  }
});

schema.methods.logout = async function (this: IUser) {
  this.secret = await genereateSecret();
  await this.save();
};

schema.methods.toJSON = function (this: IUser) {
  const obj = this.toObject();
  delete obj.password;
  delete obj.secret;
  return obj;
};

schema.methods.comparePassword = async function(this: IUser, candidatePassword: string) {
  return bcrypt.compare(candidatePassword, this.password);
}

export default model('User', schema);
