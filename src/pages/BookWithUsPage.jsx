import { useEffect } from "react";
import {
  WithCard,
  WithCardBlogSecondary,
  WithCardGrid,
  WithCardGridSecondary,
  WithCardGridSubSecondary,
  WithCardReview,
  WithCardSecondary,
} from "../common/Card";
import { WithHeading, WithParagraph } from "../common/Heading";
import { Facebook, Instagram, Twitter } from "../common/Icons";
import Footer from "../components/Footer";
import HeroCommon from "../components/HeroCommon";
import Navbar from "../components/Navbar";
import ReadyToBook from "../components/ReadyToBook";

const BookWithUsPage = () => {
  
  useEffect(() => {

    window.scroll(0, 0);
  }, []);
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
      <section className="lg:py-20 md:py-15 py-10 max-w-305 mx-auto flex flex-col gap-10 xl:gap-0 xl:flex-row items-start justify-between px-5">
        <aside className="flex flex-col gap-6 max-w-187">
          <WithParagraph content="With MovExpress, booking a Man and van service is simple, quick, and efficient. Follow the few steps below to book your van and hit the road quickly." />

          <WithHeading content="Enter Your Pickup and Drop-off Location" />

          <WithParagraph content="Start by providing the details of your move:" />

          <WithCard />

          <WithParagraph content="Our system will give the estimated travel duration and quote the fare immediately upon input." />

          <WithHeading content="Choose the Right Van Size" />

          <WithParagraph content="Choose the van size that is most appropriate for your move. We have four van sizes for customers to choose from:" />

          <WithCardGrid />

          <WithParagraph content="If you are unsure which van size is most appropriate for your move based on the volume of your belongings, feel free to consult with our team." />

          <WithHeading content="Select Your Help Option" />

          <WithParagraph content="Determine if you require any assistance to help you move to the next step:" />

          <WithCardGridSecondary />

          <WithParagraph content="Assistance is especially helpful when transporting massive items, though it can also be required for anything that may not fit into a typical car." />

          <WithHeading content="Choose Your Moving Date and Time" />

          <WithParagraph content="We offer flexible scheduling options:" />

          <WithCardGridSubSecondary />

          <WithParagraph content="You can also decide how many hours you need the van and have enough time to load and unload your items." />

          <WithHeading content="Review Your Booking Details" />

          <WithParagraph content="When making your booking, you will notice:" />

          <WithCardReview max="4" min="0" />

          <WithParagraph content="As with every step or task, double-check everything to ensure it is in order before moving on to the next phase." />

          <WithHeading content="Enter Your Contact Details" />

          <WithParagraph content="To complete your booking, some personal information is required:" />

          <WithCardReview max="7" min="4" />

          <WithHeading content="You can choose to" />

          <WithCardSecondary />
        </aside>

        <aside className="sticky top-10 max-w-[414px] w-full flex flex-col items-start gap-16 justify-center">
          <WithCardBlogSecondary />
          <div className="flex flex-col items-start justify-center gap-8">
            <WithHeading content="Share this post" />
            <div className="flex items-center justify-center gap-4">
              <Facebook />
              <Instagram />
              <Twitter />
            </div>
          </div>
        </aside>
      </section>
      <ReadyToBook />
      <Footer />
    </>
  );
};

export default BookWithUsPage;
