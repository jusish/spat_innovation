import React from "react";

const Hero = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-8 mx-4 mt-10 md:mt-20 lg:mt-40 md:flex-row md:justify-between md:mx-16 lg:mx-44">
      <div className="text-center md:text-left">
        <div className="text-3xl font-bold md:text-8xl text-mycolor">
          <h1>Next Generation</h1>
          <h1>Global Innovators</h1>
        </div>
        <p className="my-5 text-lg md:text-2xl text-gray ">
          Grow your business with our state-of-the-art technology
        </p>
        <button className="px-6 py-2 my-8 font-medium text-white bg-mycolor rounded-3xl w-52 md:w-72">
          Learn more
        </button>
      </div>
      <div className="hidden md:block">
        <img src="/assets/young.png" alt="young people" />
      </div>
    </div>
  );
};

export default Hero;
