import { useEffect, useState } from "react";
import Blogs from "../components/Blogs";
import Customer from "../components/Customer";
import Faqs from "../components/Faqs";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import ReadyToBook from "../components/ReadyToBook";
import Services from "../components/Services";
import Why from "../components/Why";
import Work from "../components/Work";
import QuoteSummary from "../components/QuoteSummary";

const Homepage = () => {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);
  const [slidernav, setslidernav] = useState(false);
  const [hide, setHide] = useState(true);

  return (
    <main className={`${(slidernav || !hide) ? "overflow-hidden h-screen" : ""}`}>
      <div className={`bg-violetprimary`}>
        <Navbar setslidernav={setslidernav} slidernav={slidernav} />
        <Hero setHide={setHide} />
      </div>
      {!hide ? <QuoteSummary hide={hide} setHide={setHide} /> : null}
      <Services />
      <Work />
      <Why />
      <Customer />
      <Faqs />
      <Blogs max={3} />
      <ReadyToBook />
      <Footer />
    </main>
  );
};

export default Homepage;
