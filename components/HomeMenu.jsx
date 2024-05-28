import Image from "next/image";

import PizzaMenuCarousel from "./PizzaMenuCarousel";

function HomeMenu() {
  return (
    /* Todays Menu section */
    <section className="my-2 rounded-lg bg-slate-100 px-2 py-4">
      <div className="left-0 right-0 z-10 hidden md:relative md:block">
        <div className="absolute left-0">
          <Image
            src="/saladleft.png"
            alt="salad1"
            height={200}
            width={200}
            className=""
          />
        </div>
        <div className="absolute right-0">
          <Image
            src="/saladright.png"
            alt="salad2"
            height={200}
            width={200}
            className=""
          />
        </div>
      </div>
      <div className="text-center">
        <h3 className="text-2xl font-semibold uppercase text-gray-500">
          today&apos;s
        </h3>
        <h2 className="text-6xl font-bold uppercase text-red-600">Menu</h2>
      </div>

      {/* Sliding menu */}
      <PizzaMenuCarousel />
    </section>
  );
}

export default HomeMenu;
