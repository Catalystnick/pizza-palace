import React from "react";
import { MdErrorOutline } from "react-icons/md";
import { FaCheck } from "react-icons/fa";

function ProfileMessageComponent({ success, error }) {
  if (success) {
    return (
      <p className=" flex justify-start gap-3 text-center font-semibold text-black">
        <FaCheck color="green" size={24} />
        {success}
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

export default ProfileMessageComponent;
