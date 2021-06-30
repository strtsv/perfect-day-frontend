import React from "react";

import Header from "../components/Header";
import Slider from "../components/Home/Slider";
import Content from "../components/Home/Content";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="page text-center animated">
      <Header />
      <Slider />
      <Content />
      <Footer />
    </div>
  );
};

export default Home;
