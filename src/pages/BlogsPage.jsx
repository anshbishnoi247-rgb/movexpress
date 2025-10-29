import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Herocommon from "../components/Herocommon";
import Book from "../components/Book";
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
        <Herocommon
          content="Our Blog and News"
          para="Whether you're looking for practical advice on maintaining a Smooth Moving"
        />
      </div>
      <Blogs hide={`hidden`} max={7} />
      <Book />
      <Footer />
    </>
  );
};

export default BlogsPage;
