import React from "react";

const Who = () => {
  return (
    <div className="flex items-center gap-40 mt-20 mx-44">
      <div>
        <img src="/assets/roundedimage.png" alt="rounded" />
      </div>

      <div className="block w-[544.76px]">
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
