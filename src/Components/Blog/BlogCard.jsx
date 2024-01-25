// import React, { useState } from "react";
import { Link } from "react-router-dom";

const BlogCard = ({ id, title, blogimage }) => {
  // const [cardId, setCardId] = useState(id);

  return (
    <div>
      <Link to={`/blog/blogdetail/${id}`}>
        <div className="lg:w-[800px] md:w-[600px] md:justify-center md:items-center md:flex md:flex-col mx-5 lg:mx-20 md:mx-20 mb-10 shadow-lg hover:cursor-pointer rounded-[12px] pb-10">
          <img src={blogimage} alt="blog" className="h-auto mb-5" />
          <div className="w-auto mx-5">
            <div className="flex gap-5 mb-5 text-[12.8px] font-[500] text-smalltextgray">
              <p>Masiyer Dakol</p>
              <p>April 6,2020</p>
              <p>2 Comments</p>
            </div>
            <h1 className="mb-3 text-[27.43px] font-[700]">{title}</h1>
            <p className=" text-[14.63px] font-[500]">
              Take a deep breath and Imagine yourself in a world where you wake
              up at 7:30am and have to be at work by 8:00am but the sad part is
              that you live in Nigeria's commercial hub and traffic is now your
              extra- curricular activity.
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default BlogCard;
