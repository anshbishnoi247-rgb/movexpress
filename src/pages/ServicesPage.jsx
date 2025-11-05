import Blogs from "../components/Blogs";
import Book from "../components/Book";
import Faqs from "../components/Faqs";
import Footer from "../components/Footer";
import Herocommon from "../components/Herocommon";
import Navbar from "../components/Navbar";
import Services from "../components/Services";
import Slides from "../components/Slides";
import Work from "../components/Work";

const ServicesPages = () => {
  return (
    <>
      {" "}
      <div className={`bg-violet1`}>
        <Navbar />
        <Herocommon
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
      <Book />
      <Footer />
    </>
  );
};

export default ServicesPages;
