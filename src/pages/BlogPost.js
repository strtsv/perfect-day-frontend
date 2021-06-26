import React from "react";

import Header from "../components/Header";
import Caption from "../components/Caption";
import Breadcrumbs from "../components/BlogPost/Breadcrumbs";
import Content from "../components/BlogPost/Content";
import Footer from "../components/Footer";

const BlogPost = () => {
  return (
    <div className="page text-center animated">
      <Header />
      <Caption title="Blog Post" />
      <Breadcrumbs />
      <Content />
      <Footer />
    </div>
  );
};

export default BlogPost;
