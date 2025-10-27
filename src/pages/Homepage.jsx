import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Work from "../components/Work";
import Customer from "../components/Customer";
import Why from "../components/Why";
import Faqs from "../components/Faqs";
import Book from "../components/Book";

const Homepage = () => {
  return (
    <>
      <div className={`bg-violet1`}>
        <Navbar />
        <Hero />
      </div>

      <Services />
      <Work />
      <Why />
      <Customer />
      <Faqs />
      <Book />
    </>
  );
};

export default Homepage;


