"use server";
import { auth } from "@/auth";
import { redirect } from "next/navigation";
import React from "react";
import ProfileForm from "@/components/forms/ProfileForm";
async function ProfilePage() {
  const session = await auth();
  const user = session?.user;

  if (!session) {
    return redirect("/");
  }

  return (
    <section className="rounded-lg bg-slate-100">
      <h1 className=" py-2 text-center text-4xl font-medium text-red-600 underline underline-offset-2">
        Profile
      </h1>
      <h3 className="py-2 text-center text-xl">Add or Edit your details</h3>
      <ProfileForm user={user} />
    </section>
  );
}

export default ProfilePage;
