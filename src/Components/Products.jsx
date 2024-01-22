import React from "react";

const Products = () => {
  return (
    <div className="mt-24 mx-44">
      <div className="items-center justify-center">
        <h1 className=" text-mycolor text-[38.77px] font-[700]">
          Our Products
        </h1>
      </div>
      <div>
        <div>
          <h1 className=" text-[38.77px] font-[700]">Setroman</h1>
          <p className=" font-[500] text-[25.85px]">
            The Setroman is an affordable new way to get your handywork done
            quickly and save time.
          </p>
          <p>
            The Setroman is not your regular market place. You go to a regular
            market place, but The Jornyman comes to you. And it brings the
            complete market place experience with it.
          </p>
          <p>See more at setroman.io</p>
          <button>Request Demo</button>
        </div>
        <div>
          <img src="/public/assets/Jornyman.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Products;
