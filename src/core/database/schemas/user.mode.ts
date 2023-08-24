import { Schema, model } from "mongoose";

const userSchema = new Schema({
  // Definir tus campos de esquema aquí
  name: String,
  email: String,
  password: String,
  // ...
});

export const UserModel = model("Users", userSchema);
