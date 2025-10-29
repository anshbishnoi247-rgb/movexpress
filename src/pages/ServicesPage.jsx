import React from "react";
import Navbar from "../components/Navbar";
import Services from "../components/Services";
import Work from "../components/Work";
import Faqs from "../components/Faqs";
import Book from "../components/Book";
import Footer from "../components/Footer";
import Blogs from "../components/Blogs";
import Herocommon from "../components/Herocommon";
import Slides from "../components/Slides";

const ServicesPages = () => {
  return (
    <>
      {" "}
      <div className={`bg-violet1`}>
        <Navbar />
        <Herocommon content="MoveXpress Services" button="Get a Quote" />
      </div>
      <Services />
      <Work />
      <Slides />
      <Faqs />
      <Blogs />
      <Book />
      <Footer />
    </>
  );
};

export default ServicesPages;
