import React from "react";
import { Carousel } from "react-responsive-carousel";
import img1 from "../assets/svgtopng/women.png";
import avatar1 from "../assets/avatar.jpg";
const Curosal = () => {
  return (
    <Carousel infiniteLoop className="">
      <div>
        <h1 className="font-bold">
          I recently got an internship offer from Cygni Energy !! All thanks to
          Nexloop. I was literally searching for a right platform where we can
          connect with people all over the world, especially EV enthusiasts and
          finally got to know about Nexloop. This platform has got all you need
          to know about Electric Vehicles and even provides real time job
          opportunities related to the EV industry. I have recently applied for
          Cygni Energy through Nexloop and got placed in it. The process was so
          smooth that nexloop took care of all the background processes from the
          application till the joining. Even the Fundamentals of EV course
          helped me a lot to understand in and out about electric vehicles. This
          is a great initiative by the Nexloop team , keep up the great work and
          all the best.
        </h1>
        <div>
          <img src={avatar1} alt="" />
          <p>Kamatham Ravi Teja Cygni Energy</p>
        </div>
      </div>
    </Carousel>
  );
};

export default Curosal;
