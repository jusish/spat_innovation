import React from "react";
import Hero from "../Hero";
import Who from "../Who";
import What from "../What";
import Products from "../Products";
import Urbannft from "../Urbannft";

const Home = () => {
  return (
    <div>
      <Hero />
      <Who />
      <What />
      <Products />
      <hr className="my-20 mx-44 border-textgray" />
      <Urbannft />
    </div>
  );
};

export default Home;
