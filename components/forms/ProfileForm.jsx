"use client";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Input } from "../ui/input";
import { Button } from "../ui/button";

import updateProfile from "@/actions/updateProfile";
import ProfileMessageComponent from "@/components/ProfileMessageComponent";
import Spinner from "@/components/Spinner";
import { useRouter } from "next/navigation";

function ProfileForm({ user }) {
  const [success, SetSuccess] = useState("");
  const [error, SetError] = useState("");

  const router = useRouter();

  /* Defining default values for zod schema */
  const form = useForm({
    resolver: zodResolver(profileSchema),
    defaultValues: {
      name: user.name,
      email: user.email,
      number: user?.number,
      address: user?.address,
      role: user?.role,
    },
  });

  /* sets input field on form status and spinner status */
  const isSubmitting = form.formState.isSubmitting;

  async function onSubmit(values) {
    SetSuccess("");
    SetError("");
    updateProfile(values).then((data) => {
      SetSuccess(data?.success);
      SetError(data?.error);
    });
  }

  /* Use effect to refresh page when profile data is updated */
  useEffect(() => {
    if (success !== "") {
      router.refresh();
    }
  }, [success, router]);

  /* Shad cdn Form UI */
  return (
    <>
      <h1 className=" py-2 text-center text-4xl font-medium text-red-600 underline underline-offset-2">
        Profile
      </h1>
      <h3 className="py-2 text-center text-xl">Add or Edit your details</h3>
      <div className="flex justify-center py-2 ">
        <div className="w-1/2 rounded-xl bg-gradient-to-b from-neutral-300 to-neutral-400 p-4">
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-10 "
            >
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

              {/* Set if user Admin or not */}

              <FormField
                control={form.control}
                name="role"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>User Role</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a Role" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="ADMIN">ADMIN </SelectItem>
                        <SelectItem value="USER">USER</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Throws success or error message on click save buttons  */}
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
    </>
  );
}

export default ProfileForm;
