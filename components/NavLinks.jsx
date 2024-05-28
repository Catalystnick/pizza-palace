"use client";
import React from "react";
import Link from "next/link";
import { menuItems } from "@/data/NavMenuLinks";
import { usePathname } from "next/navigation";

function NavLinks() {
  const pathName = usePathname();
  return (
    <div>
      {/* Map out nav links from data */}
      {menuItems.map((menuItem) => (
        <button
          className={`h-15 w-20 rounded p-2 transition-colors duration-500 hover:bg-slate-300  ${menuItem.url === pathName && "border-2 border-black  underline underline-offset-2 transition-colors duration-500"}`}
          key={menuItem.title}
        >
          <Link
            href={menuItem.url}
            className="flex flex-col items-center justify-center text-xs"
          >
            {menuItem.icon}
            {menuItem.title}
          </Link>
        </button>
      ))}
    </div>
  );
}

export default NavLinks;
