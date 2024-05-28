import { User } from "@/databaseSchemaModels/User";

async function getUserByEmail(email) {
  try {
    const user = await User.findOne({ email: email });
    return user;
  } catch {
    return null;
  }
}

export default getUserByEmail;
