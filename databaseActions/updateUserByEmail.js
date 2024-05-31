import { User } from "@/databaseSchemaModels/User";

async function UpdateUserByEmail(email, details) {
  const { name, address, number, role } = details;
  try {
    const user = await User.findOneAndUpdate(
      { email },
      { name, address, number, role },
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
