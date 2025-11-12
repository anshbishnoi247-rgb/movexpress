import { useEffect } from "react";
import Blogs from "../components/Blogs";
import Footer from "../components/Footer";
import HeroCommon from "../components/HeroCommon";
import Navbar from "../components/Navbar";
import ReadyToBook from "../components/ReadyToBook";

const BlogsPage = () => {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return (
    <>
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
