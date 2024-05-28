"use server";
import { connectToDB } from "@/lib/connectToDb";
import { registerSchema } from "../schema/schema";
import { User } from "@/databaseSchemaModels/User";
import bcrypt from "bcryptjs";
import getUserByEmail from "@/databaseActions/getUserByEmail";

export const register = async (values) => {
  /* safe  parsing values */
  const validatedFields = registerSchema.safeParse(values);

  if (!validatedFields.success) return { error: "Invalid fields" };

  const { name, email, password } = validatedFields.data;

  /* encrypting password with bcrypt */
  const hashedpassword = await bcrypt.hash(password, 10);

  /* check to see if user exists */
  connectToDB();
  const existingUser = await getUserByEmail(email);

  if (existingUser) {
    return { error: "User already exists!" };
  }
  /* Create user if no duplicate */
  if (!existingUser) {
    const createdUser = await User.create({
      name,
      email,
      password: hashedpassword,
    });

    return { success: "User created sucessfully" };
  }
};
