import { model, models, Schema } from "mongoose";

const user = {
  firstname: String,
  lastname: String,
  email: { type: String, unique: true },
  phone: String,
  house: String,
  city: String,
  state: String,
  zipCode: String,
  country: String,
  image: String,
  hash: String,
  salt: String,
    isAdmin: { type: Boolean, default: false },
    emailVerified: String,
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
    resetPasswordToken: String,
    resetPasswordExpires: Date,
  };

const userSchema = new Schema(user);

export default models.user || model("user", userSchema);
