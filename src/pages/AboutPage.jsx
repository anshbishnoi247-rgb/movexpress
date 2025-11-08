import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ReadyToBook from "../components/ReadyToBook";
import Blogs from "../components/Blogs";
import Slides from "../components/Slides";
import Faqs from "../components/Faqs";
import HeroCommon from "../components/HeroCommon";
import Best from "../components/Best";
import { bestlist, bestlistsecondary } from "../common/Helper";
import { ColorScroll } from "../common/Gsap";

const AboutPage = () => {
  return (
    <>
      <div className={`bg-violet1`}>
        <Navbar />
        <HeroCommon
          content="About Us"
          para="Your Trusted Partner for Stress-Free Moving"
        />
      </div>
      <Best
        classNamehead="hidden"
        classNameparent="!mt-0 !gap-6"
        classNamebox="!max-w-[301px] "
        list={bestlistsecondary}
      />

      <ColorScroll
        content="MoveXpress is more than a moving company — we’re your transition partners. We manage everything from packing your valuables to transporting and unloading them at your new place. Our skilled team treats your belongings with care, ensuring that everything, from delicate antiques to bulky furniture, arrives safely and on time."
        className="text-philippine "
      />

      <Best
        classNamebox="bg-commonbg"
        list={bestlist}
        head="What We Do Best"
        para="We offer a complete range of moving services designed to suit your needs"
      />
      <Slides />
      <Faqs />
      <Blogs max={3} />
      <ReadyToBook />
      <Footer />
    </>
  );
};

export default AboutPage;
