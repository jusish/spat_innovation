import React from "react";
import Hero from "../Hero";
import Who from "../Who";
import What from "../What";
import Products from "../Products";
import Urbannft from "../Urbannft";
import Faqs from "../Faqs";
import Footer from "../Footer";

const Home = () => {
  return (
    <div>
      <Hero />
      <Who />
      <What />
      <Products />
      <hr className="my-24 mx-44 border-textgray" />
      <Urbannft />
      <hr className="my-24 mb-24 mt-44 border-textgray" />
      <Faqs />
      <Footer />
    </div>
  );
};

export default Home;
