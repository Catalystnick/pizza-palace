"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

function AdminNav() {
  const pathName = usePathname();

  return (
    <div className="flex gap-4 p-4">
      <Link
        href="/profile"
        className={`${pathName === "/profile" && "underline"} hover:underline`}
      >
        Profile
      </Link>

      <Link
        href="/profile/menuitems"
        className={`${pathName === "/profile/menuitems" && "underline"} hover:underline`}
      >
        Menu Items
      </Link>
      <Link
        href="/profile/categories"
        className={`${pathName === "/profile/categories" && "underline"} hover:underline`}
      >
        Categories
      </Link>
      <Link
        href="/profile/employees"
        className={`${pathName === "/profile/employees" && "underline"} hover:underline`}
      >
        Manage Employess
      </Link>
      <Link
        href="/profile/orders"
        className={`${pathName === "/profile/orders" && "underline"} hover:underline`}
      >
        Manage Orders
      </Link>
    </div>
  );
}

export default AdminNav;
