import RegisterForm from "@/components/forms/RegisterForm";
import React from "react";

function RegisterPage() {
  return (
    <section className="rounded-lg bg-slate-100">
      <h1 className=" py-2 text-center text-4xl font-medium text-red-600 underline underline-offset-2">
        REGISTER
      </h1>
      <RegisterForm />
    </section>
  );
}

export default RegisterPage;
