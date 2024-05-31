"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { categorySchema } from "@/schema/schema";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { Input } from "../ui/input";
import { Button } from "../ui/button";

import Spinner from "@/components/Spinner";

import { saveCategory } from "@/actions/category";

function CategoryForm({ category }) {
  const [categoryArray, SetCategoryArray] = useState(category.category || []);

  /* Defining default values for zod schema */
  const form = useForm({
    resolver: zodResolver(categorySchema),
    defaultValues: {
      category: "",
    },
  });

  /* sets input field on form status and spinner status */
  const isSubmitting = form.formState.isSubmitting;

  async function onSubmit(values) {
    /* Checking to see if value already exists in array before executing to prevent duplicates */
    if (!categoryArray.includes(values.category)) {
      SetCategoryArray((prev) => [...prev, values.category]);
      saveCategory(category._id, values.category);
      return;
    }
    alert("Category already added!!");
  }

  /* Use effect to refresh page when profile data is updated */

  /* Shad cdn Form UI */
  return (
    <>
      <h1 className=" py-2 text-center text-4xl font-medium text-red-600 underline underline-offset-2">
        Categories
      </h1>
      <h3 className="py-2 text-center text-xl">Add or Remove Categories</h3>
      <div className="flex justify-center py-2 ">
        <div className="w-1/2 rounded-xl bg-gradient-to-b from-neutral-300 to-neutral-400 p-4">
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-10 "
            >
              <FormField
                control={form.control}
                name="category"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>New Category Name</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Vegetarian"
                        {...field}
                        type="text"
                        className=" bg-white focus:border-4 focus:border-teal-400 focus-visible:ring-0"
                        disabled={isSubmitting}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="flex justify-center py-4">
                <Button
                  type="submit"
                  className={`w-52 bg-red-600 px-8 py-4 transition-all duration-300 hover:scale-110 hover:bg-red-700 ${isSubmitting && "cursor-not-allowed"}`}
                >
                  {isSubmitting ? <Spinner /> : "Save"}
                </Button>
              </div>
            </form>
          </Form>
        </div>
      </div>
      <div className="flex justify-center py-4">
        <div className="flex w-1/2 flex-wrap justify-center gap-4 ">
          {categoryArray?.map((category, index) => (
            <p key={index} className="rounded-lg bg-green-300 p-2">
              {category}
            </p>
          ))}
        </div>
      </div>
    </>
  );
}

export default CategoryForm;
