import { Document, Model, model, Schema } from 'mongoose';
import * as uniqueValidator from 'mongoose-unique-validator';
import { default as User } from '../models/user';

export interface UserModel extends User, Document {}

export const UserSchema: Schema = new Schema({
  email: { type: String, unique: true },
  firstName: String,
  lastName: String,
  password: String,
  phone: String,
  userStatus: Number,
  username: String,
});

export const UserModel: Model<UserModel> = model<UserModel>('User', UserSchema);
