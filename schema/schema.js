import { z } from "zod";

export const registerSchema = z.object({
  name: z.string().min(2, { message: "Please enter a username" }),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters" }),
  email: z.string().email({ message: "Email is required" }),
});

export const loginSchema = z.object({
  password: z
    .string()
    .min(1, { message: "Password must be at least 6 characters" }),
  email: z.string().email({ message: "Email is required" }),
});