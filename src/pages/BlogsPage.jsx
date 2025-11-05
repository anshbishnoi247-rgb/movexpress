import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import HeroCommon from "../components/HeroCommon";
import ReadyToBook from "../components/ReadyToBook";
import Faqs from "../components/Faqs";
import Slides from "../components/Slides";
import Blogs from "../components/Blogs";
import { blogs } from "../common/Helper";
import { Paragraph, SubHeading } from "../common/Heading";
import { ArrowRight } from "lucide-react";

const BlogsPage = ({ max }) => {
  return (
    <>
      {" "}
      <div className={`bg-violet1`}>
        <Navbar />
        <HeroCommon
          content="Our Blog and News"
          para="Whether you're looking for practical advice on maintaining a Smooth Moving"
        />
      </div>
      <Blogs hide={`hidden`} className={"xl:!justify-start"} max={7} />
      <ReadyToBook />
      <Footer />
    </>
  );
};

export default BlogsPage;
