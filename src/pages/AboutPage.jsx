import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Book from "../components/Book";
import Blogs from "../components/Blogs";
import Slides from "../components/Slides";
import Faqs from "../components/Faqs";
import Herocommon from "../components/Herocommon";
import Best from "../components/Best";
import { SubHeadingSecondary } from "../common/Heading";
import { bestlist, bestlistsecondary } from "../common/Helper";

const AboutPage = () => {
  return (
    <>
      <div className={`bg-violet1`}>
        <Navbar />
        <Herocommon
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

      <SubHeadingSecondary
        content="MoveXpress"
        className="text-philippine"
        span="is more than a moving company — we’re your transition partners. We manage everything from packing your valuables to transporting and unloading them at your new place. Our skilled team treats your belongings with care, ensuring that everything, from delicate antiques to bulky furniture, arrives safely and on time."
      />

      <Best classNamebox="bg-commonbg" list={bestlist} />
      <Slides />
      <Faqs />
      <Blogs max={3} />
      <Book />
      <Footer />
    </>
  );
};

export default AboutPage;
