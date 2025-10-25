import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Work from "../components/Work";

const Homepage = () => {
  return (
    <>
      <div className={`bg-violet1`}>
        <Navbar />
        <Hero />
      </div>
      <Services />
      <Work />
    </>
  );
};

export default Homepage;
