import { SubHeadingSecondary } from "../common/Heading";
import { bestlistvanservies, bestlistwhyvan } from "../common/Helper";
import Best from "../components/Best";
import Blogs from "../components/Blogs";
import ReadyToBook from "../components/ReadyToBook";
import Customer from "../components/Customer";
import Faqs from "../components/Faqs";
import Footer from "../components/Footer";
import HeroCommon from "../components/HeroCommon";
import Navbar from "../components/Navbar";
import Slides from "../components/Slides";

const VanservicesPage = () => {
  return (
    <>
      <div className={`bg-violet1`}>
        <Navbar />
        <HeroCommon
          content="Man and Van Services"
          para="Fast, Reliable & Affordable Moving Solutions"
          button="Get a Quote"
        />
      </div>
      <SubHeadingSecondary content="Looking for professional man and van services near you? At MoveXpress, we make moving simple, stress-free, and cost-effective. Whether you’re relocating your home, shifting your office, delivering furniture, or transporting large parcels, our expert movers and well-equipped vans are here to handle everything for you." />
      <Best
        classNamebox="!max-w-[239px] !mt-10 md:!mt-15 lg:!mt-20 !bg-customgray"
        classNameparent="!gap-6"
        head="Why Choose Our Man and Van Services?"
        para="We offer a complete range of moving services designed to suit your needs"
        list={bestlistwhyvan}
      />
      <Slides />
      <Best
        head="Our Man and Van Services Include"
        para="Expert Moving Services Designed to Make Your Life Easier"
        classNamesection="!bg-commonbg"
        classNameparent="!gap-6"
        classNamebox=" !items-start !text-left bg-white !max-w-[306px] !mt-10 md:!mt-15 lg:!mt-20"
        classNameboxhead="!items-start"
        list={bestlistvanservies}
      />
      <Customer />
      <Blogs max={3} />
      <Faqs />
      <ReadyToBook />
      <Footer />
    </>
  );
};

export default VanservicesPage;
