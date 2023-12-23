import React from "react";
import logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <div className=" flex sticky top-0 justify-between md:px-[120px] px-[30px] py-[24px] bg-gray-500 bg-opacity-50">
      <img src={logo} alt="logo" className="w-[152px] p-2" />
      <div>
        <button
          className="border-[2px] bg-white py-2 px-5 flex items-center text-center  rounded-3xl shadow-lg font-bold text-[20px] hover:bg-gray-300 "
          style={{ transition: "0.4s" }}
        >
          Join Community
        </button>
      </div>
    </div>
  );
};

export default Navbar;
