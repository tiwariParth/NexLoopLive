import React from "react";
import img1 from "../assets/ev.jpeg";
import img2 from "../assets/automakers.jpeg";
import img3 from "../assets/coal.jpeg";
import avatar from "../assets/avatar.jpeg";

const Articals = () => {
  return (
    <div className="flex justify-center items-center text-center flex-col mt-[2rem] md:mx-auto mx-[120px]">
      <h1 className="text-center font-bold text-5xl">News & Articles</h1>
      <p className="mt-2 md:mx-[350px] mx-auto">
        Stay updated about EV industry by following the well researched blogs
        and articles published on{" "}
        <snap className="text-green-500"> Nexloop.</snap>
      </p>
      <div className="flex gap-10 mt-[1.7rem] mx-auto px-auto md:flex-row flex-col ">
        <div
          className="p-[10px] shadow-xl rounded-[30px] w-[367px] transition cursor-pointer hover:shadow-2xl"
          style={{
            transition: "0.5s",
          }}
        >
          <div>
            <img src={img1} alt="" className="w-[350px] rounded-2xl" />
            <h2 className="text-xl font-semibold mt-[20px]">
              Would we see a Fuel Cell EV era?
            </h2>
          </div>
          <div className="flex gap-3 justify-center item-center mt-5">
            <img src={avatar} alt="avatar" className="w-[30px] rounded-full" />
            <div>
              <h3>Abhishek Anirudha</h3>
              <p className="text-gray-400 font-bold">October 20, 2021</p>
            </div>
          </div>
        </div>
        <div
          className="p-[10px] shadow-xl rounded-[30px] w-[367px] transition cursor-pointer hover:shadow-2xl"
          style={{
            transition: "0.5s",
          }}
        >
          <div>
            <img src={img2} alt="" className="w-[350px] rounded-2xl" />
            <h2 className="text-xl font-semibold mt-[20px]">
              Would we see a Fuel Cell EV era?
            </h2>
          </div>
          <div className="flex gap-3 justify-center item-center mt-5">
            <img src={avatar} alt="avatar" className="w-[30px] rounded-full" />
            <div>
              <h3>Abhishek Anirudha</h3>
              <p className="text-gray-400 font-bold">October 20, 2021</p>
            </div>
          </div>
        </div>
        <div
          className="p-[10px] shadow-xl rounded-[30px] w-[367px] transition cursor-pointer hover:shadow-2xl"
          style={{
            transition: "0.5s",
          }}
        >
          <div>
            <img src={img3} alt="" className="w-[350px] rounded-2xl" />
            <h2 className="text-xl font-semibold mt-[20px]">
              Would we see a Fuel Cell EV era?
            </h2>
          </div>
          <div className="flex gap-3 justify-center item-center mt-5">
            <img src={avatar} alt="avatar" className="w-[30px] rounded-full" />
            <div>
              <h3>Abhishek Anirudha</h3>
              <p className="text-gray-400 font-bold">October 20, 2021</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Articals;
