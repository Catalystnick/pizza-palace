import { Account } from "@/databaseSchemaModels/User";

async function GetUserByAccount(userId) {
  try {
    const account = await Account.findOne({ userId });
    return account;
  } catch {
    return null;
  }
}

export default GetUserByAccount;
