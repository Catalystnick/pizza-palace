import React from "react";

function Contact() {
  return (
    <>
      {/* Contact Us Section */}
      <section className="my-2 w-full justify-center rounded-lg bg-slate-100 px-2 pb-20 pt-5">
        <div className="grid grid-cols-[1fr_0.2fr_1fr] text-center">
          <div className="text-center">
            <h3 className="text-2xl font-semibold uppercase italic text-red-600">
              Call Us On
            </h3>
            <h2 className="mt-8 text-3xl font-bold uppercase underline underline-offset-8">
              +94 555 123 122
            </h2>
          </div>
          <div className="flex flex-col justify-center text-center">
            <h2 className="text-6xl font-light">OR</h2>
          </div>

          <div className="text-center">
            <h3 className="text-2xl font-semibold uppercase italic text-red-600">
              Send Us An Email
            </h3>
            <h2 className="mt-8 text-3xl font-bold underline underline-offset-8">
              pizzapalace@mail.com
            </h2>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
