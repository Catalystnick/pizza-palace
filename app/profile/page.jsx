import React from "react";
import ProfilePage from "../../components/profile/ProfilePage";
import { auth } from "@/auth";

async function page() {
  const session = await auth();
  return (
    <div>
      <ProfilePage session={session} />
    </div>
  );
}

export default page;
