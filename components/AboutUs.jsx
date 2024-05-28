import React from "react";

function AboutUs() {
  return (
    /* About Us section */
    <section className="my-2 flex justify-center rounded-lg bg-slate-100 px-2 pb-20 pt-5">
      {/* Wrapper to keep all elements in center */}
      <div className="max-w-2xl text-center">
        <h3 className="text-2xl font-semibold uppercase text-gray-500">
          Our Story
        </h3>
        <h2 className="text-6xl font-bold uppercase text-red-600">About Us</h2>
        <p className="my-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic facilis
          et enim soluta, dolor velit repellat animi quis iusto voluptates
          nostrum fugiat dolores. Enim neque nobis reiciendis veritatis
          consequatur quod?
        </p>
        <p className="my-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic facilis
          et enim soluta, dolor velit repellat animi quis iusto voluptates
          nostrum fugiat dolores. Enim neque nobis reiciendis veritatis
          consequatur quod?
        </p>
      </div>
    </section>
  );
}

export default AboutUs;
