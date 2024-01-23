import React from "react";

const Who = () => {
  return (
    <div className="flex-col items-center block gap-64 mx-4 mt-20 md:block lg:flex md:flex-row lg:mx-44 md:mx-16">
      <div className="md:w-[544.76px] md:order-1 order-2">
        <div>
          <p className="font-semibold text-center text-moregray md:text-left">
            <span className="text-3xl"> &bull;</span>WHAT WE DO
          </p>
        </div>
        <div className="md:text-[38.77px] text-[28px] md:text-left text-center font-bold text-black">
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
          className="w-full md:w-auto md:max-h-full"
        />
      </div>
    </div>
  );
};

export default Who;
