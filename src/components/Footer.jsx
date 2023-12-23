import React from "react";
import logo from "../assets/nexloop.jpeg";

const Footer = () => {
  return (
    <div className="flex md:flex-row flex-col h-100  md:mx-[120px] mx-[20px] justify-center items-center md:gap-y-5 gap-y-2 md:gap-x-5 gap-x-0 py-[2rem] mt-[5rem]">
      <div className=" flex flex-col w-[280px] md:text-left text-center">
        <img src={logo} alt="nexloop" className="md:w-[244px]" />
        <p className=" opacity-[0.5]  mt-[2rem]">
          We at Nexloop are on a mission to make top-class EV courses and
          opportunities accessible to all.
        </p>
      </div>
      <div className="md:w-[280px] w-auto md:text-left text-center md:mt-0 mt-[3rem]">
        <h3 className="font-bold text-xl">Explore</h3>
        <ul className="flex flex-col gap-5 mt-[2rem]">
          <li className="opacity-[0.5]   cursor-pointer">Find Opportunities</li>
          <li className="opacity-[0.5]  cursor-pointer">News & Articles</li>
          <li className="opacity-[0.5]  cursor-pointer">Learn something new</li>
          <li className="opacity-[0.5]  cursor-pointer">Contact</li>
          <li className="opacity-[0.5] cursor-pointer">Privacy Policy</li>
          <li className="opacity-[0.5]  cursor-pointer">Terms & Conditions</li>
        </ul>
      </div>
      <div className="w-[280px] md:text-left text-center md:mt-0 mt-[3rem] md:self-start self-center">
        <h3 className="font-bold text-xl">Follow Us</h3>
        <ul className="flex flex-col gap-5 mt-[2rem] ">
          <li className="opacity-[0.5]   cursor-pointer">Instagram</li>
          <li className="opacity-[0.5]  cursor-pointer">Linkdin</li>
          <li className="opacity-[0.5]  cursor-pointer">Twitter</li>
          <li className="opacity-[0.5]  cursor-pointer">Youtube</li>
        </ul>
      </div>
      <div className="md:w-[280px] md:mt-0 mt-[2rem] w-auto md:self-start text-center self-center">
        <h3 className="font-bold text-xl">Subscribe to over newsletter</h3>
        <p className="opacity-[0.5] mt-[3rem]">
          Stay up-to-date with latest technological shifts happening all over
          the world.
        </p>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Enter Your Email"
          className="py-[12px] px-[3px] md:text-left text-center rounded-md mt-4 text-md shadow-xl pl-2"
        />
        <button
          className="bg-green-500 hover:bg-green-700 px-[2rem] text-center w-full py-[0.6rem] mt-[1.2rem] rounded-[30px] text-white"
          style={{
            transition: "0.4s",
          }}
        >
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default Footer;
