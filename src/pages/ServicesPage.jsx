import Blogs from "../components/Blogs";
import ReadyToBook from "../components/ReadyToBook";
import Faqs from "../components/Faqs";
import Footer from "../components/Footer";
import HeroCommon from "../components/HeroCommon";
import Navbar from "../components/Navbar";
import Services from "../components/Services";
import Slides from "../components/Slides";
import Work from "../components/Work";
import { useEffect } from "react";

const ServicesPages = () => {
  
  useEffect(() => {

    window.scroll(0, 0);
  }, []);
  return (
    <>
      <div className={`bg-violet1`}>
        <Navbar />
        <HeroCommon
          content="MoveXpress Services"
          button="Get a Quote"
          para="Reliable, Affordable & Stress-Free Relocations"
        />
      </div>
      <Services />
      <Work />
      <Slides />
      <Faqs />
      <Blogs max={3} />
      <ReadyToBook />
      <Footer />
    </>
  );
};

export default ServicesPages;
