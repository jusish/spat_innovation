import React from "react";
import { FaAngleDown } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa6";
const Faqs = () => {
  return (
    <div className="px-4 mx-auto sm:px-6 lg:px-8">
      <div className="flex items-center justify-center mb-6 md:mb-24">
        <h1 className=" text-black text-center md:text-left text-2xl sm:text-4xl font-[700] flex justify-center items-center gap-5">
          Frequently asked questions
          <span>
            <FaAngleDown />
          </span>
        </h1>
      </div>

      <div className="flex items-center justify-center lg:gap-10 md:gap-5 gap-3 py-[20px] px-5 my-10 rounded-[50px] lg:mx-44 md:mx-24 bg-gradient-to-r from-gradient1 to-gradient3 text-white flex-col lg:flex-row">
        <div>
          <img src="/assets/news.png" alt="news" className="" />
        </div>
        <p className="lg:text-[25px] font-[700] md:text-[20px] text-[15px]">
          Subcribe to our Newsletter
        </p>
        <form className="flex justify-center gap-4 items-center max-w-[400px] w-full px-2 md:px-4 md:py-2 py-1         rounded-full text-black bg-white lg:text-[20px] md:text-[15px] text-[15px]">
          <div>
            <input
              className=" min-w-[100px] sm:w-[200px] border border-white"
              type="text"
              placeholder="Enter email address"
            />
          </div>
          <div>
            <button>
              <div className="flex flex-row items-center gap-2 py-2 pl-4 pr-2 rounded-full bg-mycolor">
                <p className="text-white lg:text-[19px] md:text-[15px] text-[9px] font-[700]">
                  Subscribe
                </p>
                <FaArrowRight
                  size={30}
                  className="p-1 bg-white rounded-full icon"
                  style={{ color: "green" }}
                />
              </div>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Faqs;
