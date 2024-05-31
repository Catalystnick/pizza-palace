"use client";

import ProfileForm from "@/components/forms/ProfileForm";

function ProfilePage({ session }) {
  const user = session?.user;

  return (
    <>
      <section>
        <ProfileForm user={user} />
      </section>
    </>
  );
}

export default ProfilePage;
