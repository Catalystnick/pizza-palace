import React from "react";
import LoginForm from "../../../components/forms/LoginForm";

function page() {
  return (
    <section className="rounded-lg bg-slate-100">
      <h1 className=" py-2 text-center text-4xl font-medium text-red-600 underline underline-offset-2">
        Log In
      </h1>
      <LoginForm />
    </section>
  );
}

export default page;
