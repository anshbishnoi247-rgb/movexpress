import { Star } from "../common/Icons";

import { Paragraph, HeadingPrimary } from "../common/Heading";
import { customerlist } from "../common/Helper";
import Button from "../common/Button";

const Customer = () => {
  return (
    <section className={`lg:py-20 md:py-15 py-10 bg-white`}>
      <div
        className={`flex flex-col  items-center justify-center gap-[18px] max-w-[760px] px-5 lg:px-0 mx-auto text-center`}
      >
        <HeadingPrimary
          className={`tracking-[-2px] leading-[120%]`}
          head={"Trusted by 12,000+ Happy Customers"}
        />
        <Paragraph
          para={`Our Recent Projects section showcases some of the exceptional work we've done for our clients. From residential homes to commercial spaces.          `}
        />
      </div>

      <div
        className={`flex flex-wrap items-center justify-center mt-14 gap-6 p-5 w-fit mx-auto`}
      >
        {customerlist.map((obj, index) => {
          return (
            <div
              data-aos={obj.dataaos}
              key={index}
              className={`flex flex-wrap lg:flex-col items-center justify-center gap-6 max-w-[413px] py-4 md:py-6 lg:py-7 px-4 md:px-6 lg:px-8 bg-[#F8F5F8] rounded-xl`}
            >
              <img src={obj.img} />
              <div>
                <h2
                  className={`font-inter font-semibold text-base md:text-lg leading-[150%] md:font-lg `}
                >
                  {obj.name}
                </h2>
                <p
                  className={`font-normal font-inter text-sm leading-[150%] mt-2 mb-[14px] text-[#3D3F40] `}
                >
                  Regular Customar
                </p>
                <div className={`flex  items-center justify-center gap-2`}>
                  <Star />
                  <Star />
                  <Star />
                  <Star />
                  <Star />
                </div>
              </div>
              <p
                className={`font-inter font-medium text-center italic leading-[150%] text-sm sm:text-base md:text-lg lg:text-xl `}
              >
                “From the first contact to the completion of the cleaning, the
                service was top-notch. The team is friendly, professional, and
                very.”
              </p>
            </div>
          );
        })}
      </div>

      <div
        className={`mt-10 lg:mt-14 flex items-center gap-4 flex-wrap p-5 justify-center`}
      >
        <p
          className={`font-inter font-medium leading-[150%] text-base md:text-lg lg:text-xl `}
        >
          Have you moved with us?
        </p>
        <Button button={"Leave a review"} className={`w-[194px] !mx-0`} />
      </div>
    </section>
  );
};

export default Customer;
