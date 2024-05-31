"use server";
import CategoryForm from "@/components/forms/CategoryForm";
import loadCategory from "@/actions/category";

async function CategoryPage() {
  const category = await loadCategory();

  /* handling edge case where there are no category tags and category returns as undefined. using replacer function while parsing Json to replace undfined to null */
  const replacer = function (key, value) {
    return typeof value === "undefined" ? "" : value;
  };

  const newCategory = {
    _id: JSON?.parse(JSON.stringify(category[0]?._id, replacer)),
    category: category[0]?.category,
  };

  return <CategoryForm category={newCategory} />;
}

export default CategoryPage;
