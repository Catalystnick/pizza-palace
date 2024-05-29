import { User } from "@/databaseSchemaModels/User";

async function UpdateUserByEmail(email, { ...details }) {
  const { name, address, number } = details;
  try {
    const user = await User.findOneAndUpdate(
      { email },
      { name, address, number },
      {
        new: true,
      },
    );
    return user;
  } catch {
    return null;
  }
}

export default UpdateUserByEmail;
