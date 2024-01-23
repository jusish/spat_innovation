import React from "react";

const Who = () => {
  return (
    <div className="flex-col items-center block gap-64 mx-4 mt-20 md:block lg:flex md:flex-row lg:mx-44 md:mx-16">
      <div className="order-2 md:order-1">
        <img
          src="/assets/roundedimage.png"
          alt="rounded"
          className="w-full md:w-auto md:max-h-full"
        />
      </div>

      <div className="md:w-[544.76px] md:order-2 order-1">
        <div>
          <p className="font-semibold text-moregray">
            <span className="text-3xl"> &bull;</span> WHO WE ARE
          </p>
        </div>
        <div className="text-[38.77px] font-bold text-black">
          <h1>
            We are a Team with Focus on Innovation and Improving Business
            processes, people, and systems
          </h1>
        </div>
        <p className=" text-[25.85px] my-5 text-gray ">
          Spatium Innovation Hub is a thinking company on a mission to connect
          people and businesses with meaningful innovation, at scale.{" "}
        </p>
      </div>
    </div>
  );
};

export default Who;
