import React from "react";
import Navbar from "../components/Navbar";
import Herocommon from "../components/Herocommon";
import Footer from "../components/Footer";
import Blogs from "../components/Blogs";
import Faqs from "../components/Faqs";
import Book from "../components/Book";
import Customer from "../components/Customer";
import Slides from "../components/Slides";
import Best from "../components/Best";
import { bestlistvanservies } from "../common/Helper";

const VanservicesPage = () => {
  return (
    <>
      <div className={`bg-violet1`}>
        <Navbar />
        <Herocommon
          content="Man and Van Services"
          para="Fast, Reliable & Affordable Moving Solutions"
          button="Get a Quote"
        />
      </div>
      <Slides />
      <Best
        head="Our Man and Van Services Include"
        para="Expert Moving Services Designed to Make Your Life Easier"
        classNameparent="!gap-6"
        classNamebox="bg-commonbg !items-start !text-left !max-w-[306px] "
        classNameboxhead="!items-start"
        list={bestlistvanservies}
      />
      <Customer />
      <Blogs max={3} />
      <Faqs />
      <Book />
      <Footer />
    </>
  );
};

export default VanservicesPage;
