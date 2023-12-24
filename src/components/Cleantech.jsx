import React from "react";
import img1 from "../assets/svgtopng/laptop-1.png";
import img2 from "../assets/svgtopng/women.png";
import img3 from "../assets/svgtopng/laptop.png";
import img4 from "../assets/svgtopng/student.svg";

import logo1 from "../assets/svgtopng/partners/logo1.png";
import logo2 from "../assets/svgtopng/partners/logo2.png";
import logo3 from "../assets/svgtopng/partners/logo3.png";
import logo4 from "../assets/svgtopng/partners/logo4.png";
import logo5 from "../assets/svgtopng/partners/logo5.png";
import logo6 from "../assets/svgtopng/partners/logo6.png";
import logo7 from "../assets/svgtopng/partners/logo7.png";
import logo8 from "../assets/svgtopng/partners/logo8.png";
import logo9 from "../assets/svgtopng/partners/logo9.png";
import logo10 from "../assets/svgtopng/partners/logo10.png";
import logo11 from "../assets/svgtopng/partners/logo11.png";
import logo12 from "../assets/svgtopng/partners/logo12.png";

const Cleantech = () => {
  return (
    <div className="flex justify-center items-center md:mx-3 mx-7 my-3 flex-col gap-10 py-[20px]">
      <div className="text-center ">
        {" "}
        <h3 className="text-3xl mb-2 font-bold ">What is CleanTech?</h3>
        <p className="text-center">
          Any technology that makes products, processes, and services
          environment friendly.
        </p>
      </div>
      <h3 className="text-3xl font-bold">Who is this for?</h3>
      <ul className="flex md:flex-row flex-col md:gap-[1.2rem] gap-10 justify-between">
        <li className="flex flex-col justify-between text-center gap-[1.2rem] w-[200px]">
          {" "}
          <img src={img2} alt="cloud" className="h-[150px]" />
          <p>Enthusiasts</p>
        </li>
        <li className="flex flex-col justify-between text-center gap-5 w-[200px]">
          <img src={img1} alt="laptop" className="h-[150px]" />
          <p>Professionals</p>
        </li>
        <li className="flex flex-col justify-between text-center gap-5 w-[200px]">
          <img src={img3} alt="women" className="h-[150px]" />
          <p>Entrepreneurs</p>
        </li>
        <li className="flex flex-col justify-between text-center gap-5 w-[200px]">
          <img src={img4} alt="women" className="h-[150px]" />
          <p>Students</p>
        </li>
      </ul>

      <div className="flex flex-col text-center">
        <h2 className="text-4xl mb-[1rem] font-semibold">Our Partners</h2>
        <ul className="flex flex-wrap gap-10 md:mx-[350px] mx-[30px] justify-between ">
          <li>
            {" "}
            <img src={logo1} className="w-[100px]" alt="" />{" "}
          </li>
          <li>
            {" "}
            <img src={logo2} className="w-[100px]" alt="" />{" "}
          </li>
          <li>
            {" "}
            <img src={logo3} className=" w-[100px]" alt="" />{" "}
          </li>
          <li>
            {" "}
            <img src={logo4} className=" w-[100px]" alt="" />{" "}
          </li>
          <li>
            {" "}
            <img src={logo5} className=" w-[100px]" alt="" />{" "}
          </li>
          <li>
            {" "}
            <img src={logo6} className=" w-[100px]" alt="" />{" "}
          </li>
          <li>
            {" "}
            <img src={logo7} className=" w-[100px]" alt="" />{" "}
          </li>
          <li>
            {" "}
            <img src={logo8} className=" w-[100px]" alt="" />{" "}
          </li>
          <li>
            {" "}
            <img src={logo9} className=" w-[100px]" alt="" />{" "}
          </li>
          <li>
            {" "}
            <img src={logo10} className=" w-[100px]" alt="" />{" "}
          </li>
          <li>
            {" "}
            <img src={logo11} className=" w-[100px]" alt="" />{" "}
          </li>
          <li>
            {" "}
            <img src={logo12} className=" w-[100px]" alt="" />{" "}
          </li>
        </ul>
        <p className="font-semibold">& Many more...</p>
      </div>
    </div>
  );
};

export default Cleantech;
