import React from "react";
import { AiOutlineSearch } from "react-icons/ai";

const SideBlog = () => {
  return (
    <div className="mr-44 w-[249.61px] justify-center items-center">
      <form
        className="flex justify-between gap-4 items-center max-w-[250px] border border-bordergray pr-2 pl-5 py-2
          rounded-full  text-bordergray bg-white text-2xl mb-10"
      >
        <div>
          <input
            className="bg-transparent w-[150px] sm:w-[100px] focus:outline-none"
            type="text"
            placeholder="Search..."
          />
        </div>
        <div>
          <button>
            <div className="flex items-center gap-4 py-2 pl-2 pr-2 rounded-full bg-mycolor">
              <AiOutlineSearch
                size={20}
                className="border-white rounded-full bg-mycolor icon"
                style={{ color: "white" }}
              />
            </div>
          </button>
        </div>
      </form>

      <div>
        <div className="my-10">
          <h1 className="text-[18.29px] font-[500] leading-[21.82px] mb-3">
            Recent Posts
          </h1>
          <p className=" text-[12.8px] font-[500] leading-[15.28px]">
            Impact of Accessibility of handy Services
          </p>
        </div>

        <div className="my-10">
          <h1 className="text-[18.29px] font-[500] leading-[21.82px] mb-3">
            Recent Comments
          </h1>
          <p className=" text-[12.8px] font-[500] leading-[15.28px] mb-2">
            Masiyer Dakol on Impact of Accessibility of handy Services
          </p>
          <p className=" text-[12.8px] font-[500] leading-[15.28px]">
            Famodimu Segun on Impact of Accessibility of handy Services
          </p>
        </div>

        <div className="my-10">
          <h1 className="text-[18.29px] font-[500] leading-[21.82px] mb-3">
            Catetories
          </h1>
          <p className=" text-[12.8px] font-[500] leading-[15.28px]">
            Uncategorized 1
          </p>
          <p className=" text-[12.8px] font-[500] leading-[15.28px]">
            Uncategorized 2
          </p>
          <p className=" text-[12.8px] font-[500] leading-[15.28px]">
            Uncategorized 3
          </p>
        </div>

        <div className="my-10">
          <h1 className="text-[18.29px] font-[500] leading-[21.82px] mb-5">
            Recent posts
          </h1>
          <div className="flex gap-5 mb-3">
            <div>
              <img
                className="rounded-lg w-[65px] h-[50px]"
                src="/assets/image.png"
                alt="some"
              />
            </div>
            <div>
              <h2 className=" text-[12.8px] font-[500] leading-[15.28px]">
                Impact of Accessibility of handy Services
              </h2>
              <p className=" text-[10.8px] font-[500] text-smalltextgray">
                April 6,2020
              </p>
            </div>
          </div>
          <div className="flex gap-5">
            <div>
              <img
                className="rounded-lg w-[65px] h-[50px]"
                src="/assets/image.png"
                alt="desktop"
              />
            </div>
            <div>
              <h2 className=" text-[12.8px] font-[500] leading-[15.28px]">
                Impact of Accessibility of handy Services
              </h2>
              <p className=" text-[10.8px] font-[500] text-smalltextgray">
                April 6,2020
              </p>
            </div>
          </div>
        </div>

        <div className="my-5">
          <h1 className="text-[18.29px] font-[500] leading-[21.82px] mb-5">
            Instagram
          </h1>
          <img src="/assets/instagramposts.png" alt="" />
        </div>

        <div className="flex gap-5">
          <button>Uncategorized</button>
          <button>Uncategorized</button>
        </div>
      </div>
    </div>
  );
};

export default SideBlog;
