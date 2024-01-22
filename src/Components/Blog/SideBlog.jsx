import React from "react";
import { AiOutlineSearch } from "react-icons/ai";

const SideBlog = () => {
  return (
    <div>
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
              <p className="text-white text-[19.39px] font-[700]">Subscribe</p>
              <AiOutlineSearch
                size={30}
                className="p-2 bg-white rounded-full icon"
                style={{ color: "black" }}
              />
            </div>
          </button>
        </div>
      </form>

      <div>
        <div>
          <h1>Recent Posts</h1>
          <p>Impact of Accessibility of handy Services</p>
        </div>

        <div>
          <h1>Recent Comments</h1>
          <p>Masiyer Dakol on Impact of Accessibility of handy Services</p>
          <p>Famodimu Segun on Impact of Accessibility of handy Services</p>
        </div>

        <div>
          <h1>Catetories</h1>
          <p>Uncategorized 1</p>
          <p>Uncategorized 2</p>
          <p>Uncategorized 3</p>
        </div>

        <div>
          <h1>Recent posts</h1>
          <div>
            <div>
              <img src="/assets/image.png" alt="some" />
            </div>
            <div>
              <h2>Impact of Accessibility of handy Services</h2>
              <p>April 6,2020</p>
            </div>
          </div>
          <div>
            <div>
              <img src="/assets/desktop.png" alt="desktop" />
            </div>
            <div>
              <h2>Impact of Accessibility of handy Services</h2>
              <p>April 6,2020</p>
            </div>
          </div>
        </div>

        <div>
          <h1>Instagram</h1>
          <img src="/assets/instagramposts.png" alt="" />
        </div>

        <div>
            <button>Uncategorized</button>
            <button>Uncategorized</button>
        </div>
        
      </div>
    </div>
  );
};

export default SideBlog;
