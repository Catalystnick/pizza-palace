import { data } from "@/data/PizzaMenudata";
import Image from "next/image";
import React from "react";

function PizzaMenuCarousel() {
  return (
    /* Sliding carousel for menu */
    <div className="my-32  overflow-x-scroll">
      <div className="flex w-max gap-3 ">
        {/* Map out pizza menu data  */}
        {data.map((item) => (
          <div
            key={item.id}
            className="flex h-[60vh] w-full flex-col items-center justify-around gap-3 rounded-lg  bg-neutral-300 p-4 transition-all duration-300 hover:bg-slate-300 md:w-[50vw] xl:h-[50vh] xl:w-[30vw]"
          >
            <div className="relative w-full flex-1  transition-all duration-700 hover:rotate-45 hover:scale-110">
              <Image src={item.image} alt="" fill className="object-contain" />
            </div>
            <div className="text-lg">{item.name}</div>
            <div className="flex items-center justify-center text-sm font-semibold text-gray-600 md:h-16">
              {item.description}
            </div>
            <button className="mt-5 w-48 rounded-lg bg-red-500 px-4 py-2 text-white transition-all duration-200 hover:scale-110 hover:bg-red-600">
              Order Now - ${item.price}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PizzaMenuCarousel;
