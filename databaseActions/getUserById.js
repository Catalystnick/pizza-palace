import { User } from "@/databaseSchemaModels/User";

async function getUserById(id) {
  try {
    const user = await User.findById(id);
    return user;
  } catch {
    return null;
  }
}

export default getUserById;
