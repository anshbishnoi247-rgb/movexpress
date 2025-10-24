import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Services from "../components/Services";

const Homepage = () => {
  return (
    <>
      <div className={`bg-violet1`}>
        <Navbar />
        <Hero />
      </div>
      <Services />
    </>
  );
};

export default Homepage;
