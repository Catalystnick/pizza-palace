import React from "react";
import { MdErrorOutline } from "react-icons/md";
import { FaCheck } from "react-icons/fa";
import Link from "next/link";

function MessageComponent({ success, error }) {
  if (success) {
    return (
      <p className=" flex justify-start gap-3 text-center font-semibold text-black">
        <FaCheck color="emeralds" size={24} />
        {success}, you can now{" "}
        <Link href="/login" className="text-black underline">
          log in
        </Link>
      </p>
    );
  }
  if (error) {
    return (
      <p className=" flex justify-start gap-3 text-center font-semibold text-black">
        <MdErrorOutline color="red" size={24} />
        {error}
      </p>
    );
  }
}

export default MessageComponent;
