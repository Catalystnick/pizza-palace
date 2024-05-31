import { Item } from "@/databaseSchemaModels/User";

async function getCategory() {
  try {
    const item = await Item.find({});
    return item;
  } catch {
    return null;
  }
}

export default getCategory;

export async function saveToCategory(id, category) {
  try {
    const item = await Item.updateOne(
      { _id: id },
      { $push: { category } },
      {
        new: true,
        upsert: true,
      },
    );
    return item;
  } catch {
    return null;
  }
}
