import Link from "next/link";

import { IoLogInOutline, IoLogOutOutline } from "react-icons/io5";
import { FaRegPenToSquare } from "react-icons/fa6";
import { RiAccountCircleLine } from "react-icons/ri";

import NavLinks from "@/components/NavLinks";
import { auth, signOut } from "@/auth";

export default async function NavBar() {
  const session = await auth();
  let userName = session?.user?.name || session?.user?.email;
  if (userName?.includes(" ")) {
    userName = userName.split(" ")[0];
  }

  console.log(session);

  return (
    <>
      {/* Nav bar section */}
      <header className="my-2 flex items-center justify-between rounded-xl bg-slate-100">
        <div className="flex w-fit">
          <Link href="/" className="text-black-500 p-2 text-4xl font-medium">
            Pizza Palace {session?.user.name && `, Hello ${userName}`}
          </Link>
        </div>

        <nav className="hidden  items-center gap-10  rounded-xl sm:flex">
          <NavLinks />
          <div className="ml-5 flex gap-2">
            {session && (
              <>
                <button className="w-15 h-15 rounded-full p-2 transition-colors duration-500 hover:bg-slate-300 ">
                  <Link
                    href="/profile"
                    className="flex flex-col items-center justify-center text-sm"
                  >
                    <RiAccountCircleLine size={24} />
                    Profile
                  </Link>
                </button>
                <form
                  action={async () => {
                    "use server";
                    await signOut();
                  }}
                >
                  <button className="w-15 h-15 rounded-full p-2 transition-colors duration-500 hover:bg-slate-300">
                    <div className="flex flex-col items-center justify-center text-sm">
                      <IoLogOutOutline size={24} />
                      Log out
                    </div>
                  </button>
                </form>
              </>
            )}
            {!session && (
              <>
                <button className="w-15 h-15 rounded-full p-2 transition-colors duration-500 hover:bg-slate-300 ">
                  <Link
                    href="/login"
                    className="flex flex-col items-center justify-center text-sm"
                  >
                    <IoLogInOutline size={24} />
                    Login
                  </Link>
                </button>
                <button className="w-15 h-15 p-2 transition-colors duration-500  hover:underline ">
                  <Link
                    href="/register"
                    className="bottom-0 mt-1  flex flex-col items-center justify-center text-sm"
                  >
                    <FaRegPenToSquare size={20} />
                    Register
                  </Link>
                </button>
              </>
            )}
          </div>
        </nav>
      </header>
    </>
  );
}
