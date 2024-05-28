"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";
import { registerSchema } from "@/schema/schema";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import MessageComponent from "@/components/MessageComponent";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

import { FcGoogle } from "react-icons/fc";
import { register } from "@/actions/register";
import Spinner from "@/components/Spinner";
import { signIn } from "next-auth/react";

function RegisterForm() {
  const [success, SetSuccess] = useState("");
  const [error, SetError] = useState("");
  const [pending, setIsPending] = useState(false);

  /* Defining default values for zod schema */
  const form = useForm({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      name: "",
      password: "",
      email: "",
    },
  });

  async function onSubmit(values) {
    SetSuccess("");
    SetError("");
    setIsPending(true);
    register(values)
      .then((data) => {
        SetSuccess(data?.success);
        SetError(data?.error);
      })
      .finally(setIsPending(false));
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
                      disabled={pending}
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
                      disabled={pending}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="******"
                      {...field}
                      type="password"
                      className=" bg-white focus:border-4 focus:border-teal-400 focus-visible:ring-0"
                      disabled={pending}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <MessageComponent success={success} error={error} />
            <div className="flex justify-center py-4">
              <Button
                type="submit"
                className={`w-52 bg-red-600 px-8 py-4 transition-all duration-300 hover:scale-110 hover:bg-red-700 ${pending && "cursor-not-allowed"}`}
              >
                {pending ? <Spinner /> : "Register"}
              </Button>
            </div>
          </form>
        </Form>

        <div className="py-4 text-center text-xl">OR</div>

        {/* Login with google */}
        <div className="flex justify-center ">
          <Button
            className="flex w-52 justify-center gap-4 bg-white p-5 text-black transition-all duration-300 hover:scale-110 hover:bg-white"
            onClick={() => {
              signIn("google", { callbackUrl: "/" });
            }}
          >
            <FcGoogle size={24} />
            Login with Google
          </Button>
        </div>
      </div>
    </div>
  );
}

export default RegisterForm;
