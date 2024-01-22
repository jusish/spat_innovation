import React from "react";

const BlogCard = ({ title, blogimage }) => {
  return (
    <div>
      <div className="w-[800.02px] mx-40 my-10 shadow-lg rounded-[13.71px] pb-10">
        <img src={blogimage} alt="blog" className="h-auto mb-5" />
        <div className="w-auto mx-5">
          <div className="flex gap-5 mb-5 text-[12.8px] font-[500] text-smalltextgray">
            <p>Masiyer Dakol</p>
            <p>April 6,2020</p>
            <p>2 Comments</p>
          </div>
          <h1 className="mb-3 text-[27.43px] font-[700]">{title}</h1>
          <p className=" text-[14.63px] font-[500]">
            Take a deep breath and Imagine yourself in a world where you wake up
            at 7:30am and have to be at work by 8:00am but the sad part is that
            you live in Nigeria's commercial hub and traffic is now your extra-
            curricular activity.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
