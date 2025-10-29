import React from "react";
import { HeadingPrimary, Paragraph, SubHeading } from "../common/Heading";

import { ArrowRight } from "lucide-react";
import { blogs } from "../common/Helper";

const Blogs = ({ hide, max }) => {
  return (
    <section className={`lg:py-20 md:py-15 py-10 bg-white`}>
      <div
        className={`flex flex-col ${hide} items-center justify-center gap-[18px] max-w-[760px] px-5 lg:px-0 mx-auto text-center`}
      >
        <HeadingPrimary
          className={`tracking-[-2px] leading-[120%]`}
          head={"Read Our Blog and News"}
        />
        <Paragraph
          para={`Whether you're looking for practical advice on maintaining a Smooth Moving`}
        />
      </div>

      <div
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
        className={`xl:pt-18 pt-14 flex flex-wrap gap-y-10 md:gap-y-14 lg:gap-y-18 items-center gap-x-6 px-5 justify-center max-w-[1333px] w-fit mx-auto`}
      >
        {blogs.slice(0, max).map((obj, index) => (
          <div
            className={`max-w-[415px] group flex flex-col items-center justify-center gap-6`}
          >
            <div className={`overflow-hidden rounded-2xl`}>
              <img
                src={obj.img}
                alt="pack"
                className={`rounded-2xl w-full h-50 md:h-70 group-hover:scale-105 transition-all duration-300 ease-in-out xl:h-[379px] object-cover`}
              />
            </div>
            <div className={`flex flex-col items-center justify-center`}>
              <div class="pr-[37px]">
                <SubHeading
                  className={`mb-4 max-w-[321px]
                 `}
                  head={obj.heading}
                />

                <Paragraph para={obj.paragraph} />
                <a
                  href={`#`}
                  className={`text-violet1 mt-4 lg:mt-6 text-inter font-semibold text-base leading-[150%] transcking-[-0.3px] flex items-center`}
                >
                  {" "}
                  Learn more{" "}
                  <ArrowRight
                    className={`group-hover:translate-x-3 transition-all duration-300 linear`}
                  />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Blogs;
