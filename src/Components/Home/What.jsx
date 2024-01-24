import React from "react";

const Who = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-8 mx-4 mt-10 md:mt-20 lg:mt-40 md:flex-row md:justify-between md:mx-16 lg:mx-44">
      <div className="md:w-[544.76px] md:order-1 order-2">
        <div>
          <p className="font-semibold text-center text-moregray md:text-left">
            <span className="text-3xl"> &bull;</span>WHAT WE DO
          </p>
        </div>
        <div className="md:text-[25px] text-[20px] md:text-left text-center font-bold text-black">
          <h1>
            We are a Team with Focus on Innovation and Improving Business
            processes, people, and systems
          </h1>
        </div>
        <p className=" md:text-[25.85px] my-5 text-gray text-center md:text-left text-[19px]">
          Spatium Innovation Hub is a thinking company on a mission to connect
          people and businesses with meaningful innovation, at scale.
        </p>
      </div>
      <div className="order-1 md:order-2">
        <img
          src="/assets/desktop.png"
          alt="rounded"
          className="w-[300px] md:w-[300px] lg:min-w-[400px]"
        />
      </div>
    </div>
  );
};

export default Who;
