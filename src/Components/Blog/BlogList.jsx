import React from "react";
import BlogCard from "./BlogCard";

const BlogList = () => {
  const cardsData = [
    {
      title: "Impact of Accessibility of Handy Services",
      blogimage: "/assets/image.png",
    },
    {
      title: "Impact of Accessibility of Handy Services",
      blogimage: "/assets/watch.png",
    },
  ];
  return (
    <div className="flex flex-col">
      {cardsData.map((card, index) => (
        <BlogCard key={index} title={card.title} blogimage={card.blogimage} />
      ))}
    </div>
  );
};

export default BlogList;
