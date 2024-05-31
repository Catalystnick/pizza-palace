"use server";

import { connectToDB } from "@/lib/connectToDb";

import getCategory, { saveToCategory } from "@/databaseActions/getCategory";
import mongoose from "mongoose";

async function loadCategory() {
  try {
    await connectToDB();
    const category = await getCategory({});
    return category;
  } catch {
    return null;
  }
}

export async function saveCategory(id, value) {
  const category = JSON.parse(JSON.stringify(value));

  /* In the event id is null, we generate ID from client side */
  if (!id) {
    id = new mongoose.mongo.ObjectId();
  }

  try {
    await connectToDB();
    const result = await saveToCategory(id, category);
    return result;
  } catch {
    return null;
  }
}

export default loadCategory;
