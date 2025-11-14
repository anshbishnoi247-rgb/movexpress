import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Work from "../components/Work";
import Customer from "../components/Customer";
import Why from "../components/Why";
import Faqs from "../components/Faqs";
import Blogs from "../components/Blogs";
import ReadyToBook from "../components/ReadyToBook";
import Footer from "../components/Footer";
import { useEffect } from "react";

const Homepage = () => {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);
  return (
    <>
      <div className={`bg-violetprimary`}>
        <Navbar />
        <Hero />
      </div>

      <Services />
      <Work />
      <Why />
      <Customer />
      <Faqs />
      <Blogs max={3} />
      <ReadyToBook />
      <Footer />
    </>
  );
};

export default Homepage;
