import React from "react";
import {AiOutlineSearch} from 'react-icons/ai';
const Faqs = () => {
  return (
    <div>
      <div className="flex items-center justify-center">
        <h1 className=" text-black text-[38.77px] font-[700]">
          Frequently asked questions
        </h1>
      </div>

      <div className="flex items-center justify-center gap-10 px-5 py-[20px] my-10 rounded-[50px] mx-44 bg-gradient-to-r from-gradient1 to-gradient3 text-white">
        <div>
            <img src="/assets/news.png" alt="news" className="" />
        </div>
        <p className="text-[25.85px] font-[700]">Subcribe to our Newsletter</p>
        <form
          className='flex justify-between items-center max-w-[100px] mx-auto w-full border p-1
          rounded-md text-black bg-gray-100/90'
        >
          <div>
            <input
              className='bg-transparent w-[200px] sm:w-[400px] font-[Poppins] focus:outline-none
                  '
              type='text'
              placeholder='Search Destinations'
            />
          </div>
          <div>
            <button className="flex flow-row">
              <p>Subscribe</p>
              <AiOutlineSearch size={20} className='bg-black' style={{color: '#ffffff'}} />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Faqs;
