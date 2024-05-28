import {
  IoHomeOutline,
  IoPizzaOutline,
  IoPeopleOutline,
  IoMailOutline,
} from "react-icons/io5";

export const menuItems = [
  {
    title: "Home",
    url: "/",
    icon: <IoHomeOutline size={22} />,
  },
  {
    title: "Menu",
    url: "/menu",
    icon: <IoPizzaOutline size={22} />,
  },
  {
    title: "About Us",
    url: "/about",
    icon: <IoPeopleOutline size={22} />,
  },
  {
    title: "Contact Us",
    url: "/contact",
    icon: <IoMailOutline size={22} />,
  },
];
