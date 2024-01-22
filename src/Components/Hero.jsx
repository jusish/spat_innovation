import React from "react";

const Hero = () => {
  return (
    <div className="flex items-center gap-40 mt-40 align-middle mx-44">
      <div className="block">
        <div className="font-bold text-8xl text-mycolor">
          <h1>Next Generation</h1>
          <h1>Global Innovators</h1>
        </div>
        <p className=" text-[24.87px] my-5 text-gray ">
          Grow your business with our state-of-the art technology
        </p>
        <button className="px-6 py-2 text-white bg-mycolor  rounded-3xl w-{151.85px} h-{52.77px} font-medium my-8">
          Learn more
        </button>
      </div>
      <div>
        <img src="/assets/young.png" alt="young people" />
      </div>
    </div>
  );
};

export default Hero;
