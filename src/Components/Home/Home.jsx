import React from "react";
import Hero from "../Hero";
import Who from "../Who";
import What from "../What";
import Products from "../Products";
import Urbannft from "../Urbannft";
import Faqs from "../Faqs";

const Home = () => {
  return (
    <div>
      <Hero />
      <Who />
      <What />
      <Products />
      <hr className="my-24 mx-44 border-textgray" />
      <Urbannft />
      <hr className="my-24 mx-44 border-textgray" />
      <Faqs />
    </div>
  );
};

export default Home;
