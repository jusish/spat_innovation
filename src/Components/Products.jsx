import React from "react";

const Products = () => {
  return (
    <div className="mt-24 mx-44">
      <div className="flex items-center justify-center">
        <h1 className=" text-mycolor text-[38.77px] font-[700]">
          Our Products
        </h1>
      </div>
      <div className="flex gap-40 mt-20">
        <div className="w-[544.19px]">
          <h1 className=" text-[38.77px] font-[700]">Setroman</h1>
          <p className=" font-[500] text-[25.85px] mt-10">
            The Setroman is an affordable new way to get your handywork done
            quickly and save time.
          </p>
          <p className="mt-5 text-[19.39px] text-textgray font-[400]">
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
        <div>
          <img src="/assets/Jornyman.png" alt="jornyman" />
        </div>
      </div>
    </div>
  );
};

export default Products;
