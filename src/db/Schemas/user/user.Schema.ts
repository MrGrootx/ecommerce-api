import { Model, Schema, model } from "mongoose";
import { TUser } from "../../../users/types/user.types";

const UserSchema = new Schema<TUser>(
  {
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const UserModal: Model<TUser> = model<TUser>("User", UserSchema);

export default UserModal;
