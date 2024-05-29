"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import updateProfile from "@/actions/updateProfile";

import { zodResolver } from "@hookform/resolvers/zod";
import { profileSchema } from "@/schema/schema";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import ProfileMessageComponent from "@/components/ProfileMessageComponent";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

import Spinner from "@/components/Spinner";

function ProfileForm({ user }) {
  const [success, SetSuccess] = useState("");
  const [error, SetError] = useState("");

  /* Defining default values for zod schema */
  const form = useForm({
    resolver: zodResolver(profileSchema),
    defaultValues: {
      name: user.name,
      email: user.email,
      number: user?.number,
      address: user?.address,
    },
  });

  const isSubmitting = form.formState.isSubmitting;

  async function onSubmit(values) {
    SetSuccess("");
    SetError("");
    updateProfile(values).then((data) => {
      SetSuccess(data?.success);
      SetError(data?.error);
      console.log(data);
    });
  }

  /* Shad cdn Form UI */
  return (
    <div className="flex justify-center py-2 ">
      <div className="w-1/2 rounded-xl bg-gradient-to-b from-neutral-300 to-neutral-400 p-4">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-10 ">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Username</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="John Doe"
                      {...field}
                      type="text"
                      className=" bg-white focus:border-4 focus:border-teal-400 focus-visible:ring-0"
                      disabled={isSubmitting || user.isOauth}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="johndoe@gmail.com"
                      {...field}
                      type="email"
                      className="bg-white focus:border-4 focus:border-teal-400 focus-visible:ring-0"
                      disabled={true}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="number"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Phone Number</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="+94 123 456 789"
                      {...field}
                      type="number"
                      className="bg-white focus:border-4 focus:border-teal-400 focus-visible:ring-0"
                      disabled={isSubmitting}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="address"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Address</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="House Number, Street Name, City"
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

            <ProfileMessageComponent success={success} error={error} />
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
  );
}

export default ProfileForm;
