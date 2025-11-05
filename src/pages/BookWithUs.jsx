import Footer from "../components/Footer";
import HeroCommon from "../components/HeroCommon";
import Navbar from "../components/Navbar";
import ReadyToBook from "../components/ReadyToBook";

const BookWithUs = () => {
  return (
    <>
      <div className={`bg-violet1`}>
        <Navbar />
        <HeroCommon
          content="How to Make a Booking with Us?"
          classNameHeading="max-w-[706px]"
          time={true}
        />
      </div>
      <ReadyToBook />
      <Footer />
    </>
  );
};

export default BookWithUs;
