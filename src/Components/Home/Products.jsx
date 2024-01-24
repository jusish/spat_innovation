import React from "react";

const Products = () => {
  return (
    <div className="">
      <div className="flex flex-col items-center justify-center">
        <h1 className=" text-mycolor text-[38.77px] text-2xl sm:text-3xl md:text-4xl sm:mb-6 font-[700]">
          Our Products
        </h1>
      </div>
      <div className="flex flex-col items-center justify-center gap-8 mx-4 mt-10 md:mt-20 lg:mt-40 md:flex-row md:justify-between md:mx-16 lg:mx-44 md:gap-10">
        <div className="md:w-[544.19px] text-center md:text-left order-2 md:order-1 w-full">
          <h1 className=" text-[38.77px] text-xl sm:text-2xl md:text-3xl font-[700]">
            Setroman
          </h1>
          <p className=" font-[500] text-[25.85px] text-lg sm:text-xl md:text-2xl md:mt-10 mt-4">
            The Setroman is an affordable new way to get your handywork done
            quickly and save time.
          </p>
          <p className="mt-5 md:text-[19.39px] text-[15px] text-textgray font-[400] text-center md:text-left">
            The Setroman is not your regular market place. You go to a regular
            market place, but The Jornyman comes to you. And it brings the
            complete market place experience with it.
          </p>
          <p className="mt-5 text-[19.39px] text-textgray font-[400]">
            See more at setroman.io
          </p>
          <button className="px-6 py-3 mt-8 text-white bg-mycolor rounded-2xl">
            Request Demo
          </button>
        </div>
        <div className="order-2 md:order-1">
          <img src="/assets/Jornyman.png" alt="jornyman" className=" w-[300px] md:min-w-[300px] lg:min-w-[400px]" />
        </div>
      </div>
    </div>
  );
};

export default Products;
