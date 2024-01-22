import React from "react";
import BlogList from "./BlogList";
import Footer from "../Footer";

const Blog = () => {
  return (
    <div>
      <div className="flex items-center justify-center my-16">
        <h1 className=" text-mycolor text-[69.98px] leading-[92.58px] font-[700]">
          Blog
        </h1>
      </div>
      <div>
        <BlogList />
      </div>
      <Footer />
    </div>
  );
};

export default Blog;
