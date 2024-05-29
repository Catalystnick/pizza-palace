"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema } from "@/schema/schema";
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
import { FcGoogle } from "react-icons/fc";
import { login } from "@/actions/login";
import { signIn } from "next-auth/react";

import Spinner from "@/components/Spinner";
import MessageComponent from "../MessageComponent";

function LoginForm() {
  const [error, SetError] = useState("");

  /* Defining default values for zod schema */
  const form = useForm({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      password: "",
      email: "",
    },
  });

  /* sets input field on form status and spinner status */
  const isSubmitting = form.formState.isSubmitting;

  async function onSubmit(values) {
    SetError("");
    login(values).then((data) => {
      SetError(data?.error);
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
                      disabled={isSubmitting}
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
                      disabled={isSubmitting}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Throws error messages on failed login to the user */}
            <MessageComponent error={error} />
            <div className="flex justify-center py-4">
              <Button
                type="submit"
                className={`w-52 bg-red-600 px-8 py-4 transition-all duration-300 hover:scale-110 hover:bg-red-700 ${isSubmitting && "cursor-not-allowed"}`}
              >
                {isSubmitting ? <Spinner /> : "Log in with credentials"}
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

export default LoginForm;
