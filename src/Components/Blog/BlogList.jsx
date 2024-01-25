import React from "react";
import BlogCard from "./BlogCard";

const BlogList = () => {
  const cardsData = [
    {
      id: 1,
      title: "Impact of Accessibility of Handy Services",
      blogimage: "/assets/image.png",
    },
    {
      id: 2,
      title: "Impact of Accessibility of Handy Services",
      blogimage: "/assets/watch.png",
    },
  ];
  return (
    <div className="flex flex-col">
      {cardsData.map((card, index) => (
        <BlogCard
          id={card.id}
          key={index}
          title={card.title}
          blogimage={card.blogimage}
        />
      ))}
    </div>
  );
};

export default BlogList;
