import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { FaAngleDown } from "react-icons/fa";
const Faqs = () => {
  return (
    <div>
      <div className="flex items-center justify-center mb-24">
        <h1 className=" text-black text-[38.77px] font-[700] flex justify-center items-center gap-5">
          Frequently asked questions
          <span>
            <FaAngleDown />
          </span>
        </h1>
      </div>

      <div className="flex items-center justify-center gap-10 px-5 py-[20px] my-10 rounded-[50px] mx-44 bg-gradient-to-r from-gradient1 to-gradient3 text-white">
        <div>
          <img src="/assets/news.png" alt="news" className="" />
        </div>
        <p className="text-[25.85px] font-[700]">Subcribe to our Newsletter</p>
        <form
          className="flex justify-between gap-4 items-center max-w-[530px] w-full  px-6 py-2
          rounded-full text-black bg-white text-2xl"
        >
          <div>
            <input
              className="bg-transparent w-[300px] sm:w-[200px] focus:outline-none"
              type="text"
              placeholder="Enter email address"
            />
          </div>
          <div>
            <button>
              <div className="flex flex-row items-center gap-4 py-2 pl-4 pr-2 rounded-full bg-mycolor">
                <p className="text-white text-[19.39px] font-[700]">
                  Subscribe
                </p>
                <AiOutlineSearch
                  size={30}
                  className="p-2 bg-white rounded-full icon"
                  style={{ color: "black" }}
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
