import React from "react";

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
        <input type="text" className="" />
      </div>
    </div>
  );
};

export default Faqs;
