"use client";

import { redirect } from "next/navigation";
import ProfileForm from "@/components/forms/ProfileForm";

function ProfilePage({ session }) {
  const user = session?.user;

  if (!session) {
    return redirect("/");
  }

  return (
    <>
      <section>
        <ProfileForm user={user} />
      </section>
    </>
  );
}

export default ProfilePage;
