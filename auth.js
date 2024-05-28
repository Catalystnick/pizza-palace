import NextAuth from "next-auth";

import Credentials from "next-auth/providers/credentials";
import { loginSchema } from "./schema/schema";
import getUserByEmail from "./databaseActions/getUserByEmail";
import getUserById from "./databaseActions/getUserById";

import bcrypt from "bcryptjs";
import { connectToDB } from "@/lib/connectToDb";
import Google from "next-auth/providers/google";
import { MongoDBAdapter } from "@auth/mongodb-adapter";
import clientPromise from "./lib/db";

export const { handlers, signIn, signOut, auth } = NextAuth({
  session: { strategy: "jwt" },
  providers: [
    Google({
      clientId: process.env.GOOGLE_Client_ID,
      clientSecret: process.env.GOOGLE_Client_Secret,
    }),
    Credentials({
      authorize: async (credentials) => {
        try {
          const validatedField = loginSchema.safeParse(credentials);
          if (validatedField.success) {
            const { email, password } = validatedField.data;

            /* Connect to db to fetch user and check if provided password matches the one in database */
            connectToDB();
            const user = await getUserByEmail(email);
            if (!user || !user.password) return null;
            const passwordsMatch = await bcrypt.compare(
              password,
              user.password,
            );

            if (passwordsMatch) return user;
          }
          return null;
        } catch (error) {
          return null;
        }
      },
    }),
  ],
  callbacks: {
    async session({ session, token }) {
      if (token.sub && session.user) {
        session.user.id = token.sub;
      }
      return session;
    },
    async jwt({ token }) {
      if (!token.sub) return token;

      return token;
    },
  },
  adapter: MongoDBAdapter(clientPromise),
});
