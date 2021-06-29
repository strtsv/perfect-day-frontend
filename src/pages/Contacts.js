import React from "react";

import Header from "../components/Header";
import Caption from "../components/Contacts/Caption";
import Breadcrumbs from "../components/Contacts/Breadcrumbs";
import Content from "../components/Contacts/Content";
import Footer from "../components/Footer";

const Contacts = () => {
  return (
    <div className="page text-center animated">
      <Header />
      <Caption />
      <Breadcrumbs />
      <Content />
      <Footer />
    </div>
  );
};

export default Contacts;
