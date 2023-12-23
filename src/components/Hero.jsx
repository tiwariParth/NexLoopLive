import React from "react";

const Hero = () => {
  return (
    <div className="flex justify-center items-center h-[100vh] top-6 ">
      <div className="bg-gray-100 bg-opacity-60 flex flex-col gap-10 text-center rounded-2xl p-[60px] md:mx-[250px] mx-[150px]">
        {" "}
        <h1 className=" font-extrabold text-6xl">
          India's Most Passionate
          <span className="text-green-600"> CleanTech </span>Community!
        </h1>
        <p className="text-4xl">A place to Learn, Network & Solve</p>
        <ul className="flex gap-3 mt-6 justify-evenly">
          <li className=" transition delay-[0.3s] rounded-[15px] hover:-translate-y-4 cursor-pointer p-3 bg-gray-100">
            Learn
          </li>
          <li className=" transition delay-[0.3s] rounded-[15px] hover:-translate-y-4 cursor-pointer p-3 bg-gray-100">
            Jobs
          </li>
          <li className=" transition delay-[0.3s] rounded-[15px] hover:-translate-y-4 cursor-pointer p-3 bg-gray-100">
            Networking
          </li>
          <li className=" transition delay-[0.3s] rounded-[15px] hover:-translate-y-4 cursor-pointer p-3 bg-gray-100">
            News Article
          </li>
          <li className=" transition delay-[0.3s] rounded-[15px] hover:-translate-y-4 cursor-pointer p-3 bg-gray-100">
            Events
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Hero;
