import { string } from "joi";
import * as mongoose from "mongoose";
import { Model } from "mongoose";

type UserType = UserModel & mongoose.Document;

export interface UserModel {
  username: {
    type: String;
    required: true;
    unique: true;
  };
  password: {
    type: String;
    required: true;
  };
}

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const User: Model<UserType> = mongoose.model<UserType>("User", userSchema)
export default User
