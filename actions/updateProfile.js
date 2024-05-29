"use server";

import { profileSchema } from "../schema/schema";
import { connectToDB } from "@/lib/connectToDb";
import UpdateUserByEmail from "@/databaseActions/updateUserByEmail";

async function updateProfile(values) {
  const validatedFields = profileSchema.safeParse(values);

  if (validatedFields.success) {
    const { name, address, number, email } = validatedFields.data;

    const details = {
      name,
      address,
      number,
    };

    await connectToDB();

    const updateUser = await UpdateUserByEmail(email, details);
    if (!updateUser) {
      return { error: "Something went wrong. please try again" };
    }

    return { success: "Profile updated successfully" };
  }
}

export default updateProfile;
