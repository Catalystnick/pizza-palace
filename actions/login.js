"use server";

import { signIn } from "@/auth";
import { loginSchema } from "@/schema/schema";
import { connectToDB } from "@/lib/connectToDb";
import getUserByEmail from "@/databaseActions/getUserByEmail";
import { AuthError } from "next-auth";

export const login = async (values) => {
  /* safe parse values */
  const validatedFields = loginSchema.safeParse(values);
  if (!validatedFields) return { error: "Invalid fields" };

  const { email, password } = validatedFields.data;

  /* Connect to db and check for user by email */
  connectToDB();
  const existingUser = await getUserByEmail(email);

  if (!existingUser || !existingUser.email || !existingUser.password) {
    return { error: "Email does not exist" };
  }

  /* Auth js sign in */
  try {
    await signIn("credentials", { email, password, redirectTo: "/" });
  } catch (error) {
    /* switch statement for autherror */
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return { error: "Invalid Credentials" };

        default:
          return { error: "Something went wrong" };
      }
    }
    throw error;
  }
};
