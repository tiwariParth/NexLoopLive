import React from "react";

const Hero = () => {
  return (
    <div className="flex justify-center items-center ">
      <div className="bg-gray-100 bg-opacity-60 flex flex-col gap-10 text-center md:rounded-2xl rounded-xl md:p-[60px] p-[10px] md:mx-auto mx-[80px] md:w-[500px] my-[7rem]">
        {" "}
        <h1 className=" font-extrabold text-6xl w-fit">
          India's Most Passionate
          <span className="text-green-600"> CleanTech </span>Community!
        </h1>
        <p className="text-4xl">A place to Learn, Network & Solve</p>
        <ul className="flex gap-1 p-2 justify-evenly">
          <li className=" transition delay-[0.3s] rounded-[15px] hover:-translate-y-4 cursor-pointer md:p-3 p-2 bg-gray-100">
            Learn
          </li>
          <li className=" transition delay-[0.3s] rounded-[15px] hover:-translate-y-4 cursor-pointer md:p-3 p-2 bg-gray-100">
            Jobs
          </li>
          <li className=" transition delay-[0.3s] rounded-[15px] hover:-translate-y-4 cursor-pointer md:p-3 p-2 bg-gray-100">
            Networking
          </li>
          <li className=" transition delay-[0.3s] rounded-[15px] hover:-translate-y-4 cursor-pointer md:p-3 p-2 bg-gray-100">
            News Article
          </li>
          <li className=" transition delay-[0.3s] rounded-[15px] hover:-translate-y-4 cursor-pointer md:p-3 p-2 bg-gray-100">
            Events
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Hero;
