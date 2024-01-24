import React from "react";
import BlogList from "./BlogList";
import Footer from "../Footer";
import SideBlog from "./SideBlog";

const Blog = () => {
  return (
    <div>
      <div className="flex flex-row items-center justify-center my-16">
        <h1 className=" text-mycolor text-[70px] leading-[90px] font-[700]">
          Blog
        </h1>
      </div>

      <div className="flex flex-row justify-center">
        <div>
          <BlogList />
        </div>
        <div>
          <SideBlog />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Blog;
