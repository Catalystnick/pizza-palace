import mongoose, { model, models, Schema } from "mongoose";

const userSchema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    number: { type: String },
    address: { type: String },
    image: { type: String },
    role: {
      type: String,
      enum: ["ADMIN", "USER"],
      default: "USER",
      required: true,
    },
  },
  { timestamps: true },
);

const accountSchema = new Schema(
  {
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    type: { type: String },
    provider: { type: String },
    providerAccountId: { type: String },
    refresh_token: { type: String },
    access_token: { type: String },
    expires_at: { type: String },
    token_type: { type: String },
    scope: { type: String },
    id_token: { type: String },
    session_state: { type: String },
  },
  { timestamps: true },
);

export const Account = models?.Account || model("Account", accountSchema);

export const User = models?.User || model("User", userSchema);
