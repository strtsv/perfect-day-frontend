import React from "react";

import Header from "../components/Header";
import Caption from "../components/Caption";
import Breadcrumbs from "../components/Blog/Breadcrumbs";
import Content from "../components/Blog/Content";
import Footer from "../components/Footer";

const Blog = () => {
  return (
    <div className="page text-center animated">
      <Header />
      <Caption title="Blog" />
      <Breadcrumbs />
      <Content />
      <Footer />
    </div>
  );
};

export default Blog;
