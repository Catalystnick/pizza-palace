"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { IoIosArrowDropright } from "react-icons/io";

const slider = ["/pizza.png", "/pepperonipizza.png", "/png-pizza.jpg"];

function Hero() {
  const [index, setIndex] = useState(0);

  /* Use effect to change images every 4 seconds */
  useEffect(() => {
    const timer = setInterval(() => {
      if (index < slider.length - 1) {
        setIndex(index + 1);
      } else {
        setIndex(0);
      }
    }, 4000);

    return () => clearInterval(timer);
  }, [index]);

  return (
    /* Hero section at top of the page */
    <section className="flex justify-center rounded-lg bg-slate-100 px-2 py-4 md:grid md:grid-cols-[0.4fr_0.6fr]">
      <div className="py-16">
        <h1 className="my-6 text-center text-4xl font-semibold md:text-6xl">
          Everything is better with&nbsp;
          <span className="text-red-600">Pizza</span>
        </h1>
        <p className="my-6 text-center text-gray-500">
          Pizza is the missing piece that makes everyday complete, a simple yet
          delicious joy in life
        </p>
        <div className="flex w-full items-center justify-center gap-4 md:w-fit">
          <button className="flex items-center gap-2 rounded-full bg-lime-300 px-8 py-2 font-semibold hover:bg-lime-400 hover:ring-2 hover:ring-black">
            Order Now <IoIosArrowDropright size={30} />
          </button>
          <button className="flex items-center gap-2 rounded-full border-2 px-8 py-2  font-medium underline hover:bg-white/85 hover:ring-2 hover:ring-black">
            Learn More <IoIosArrowDropright size={30} />
          </button>
        </div>
      </div>
      <div className="relative hidden md:block">
        <Image
          alt="Pizza"
          src={slider[index]}
          fill
          className="object-contain "
        />
      </div>
    </section>
  );
}

export default Hero;
