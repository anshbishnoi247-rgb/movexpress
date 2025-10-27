import { Heading1, Heading2, Para } from "../common/Heading";
import React from "react";
import { ArrowUpRight } from "lucide-react";
import { services } from "../common/Helper";
import { Buttoncommon } from "../common/Button";

const Services = () => {
  return (
    <section id="services" className="lg:py-20 md:py-15 py-10 bg-commonbg">
      <div
        className={`flex flex-col items-center justify-center gap-[18px] max-w-[898px] px-5 lg:px-0 mx-auto text-center`}
      >
        <Heading1
          className={`tracking-[-1px] leading-[125%]`}
          head={"Our Top Rated Services"}
        />
        <Para
          para={
            "Count on us as your dependable partner for exceptional Moving solutions that turn spaces into pristine havens. Our dedicated team offers a wide array of services tailored to your unique requirements. "
          }
        />
      </div>
      <div
        className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-4 lg:gap-6 sm:p-5 md:p-0 max-w-fit mx-auto mt-14`}
      >
        {services.map((Obj, index) => {
          return (
            <div
              key={index}
              className={`flex flex-col items-start justify-center max-w-[310px] gap-3 md:gap-4 lg:gap-6 p-4 md:p-6 w-full rounded-2xl group bg-white`}
            >
              <div className={`flex items-center justify-between w-full `}>
                <span
                  className={` ${
                    index == 1
                      ? "group-hover:rotate-[360deg] duration-1000"
                      : "group-hover:translate-x-[20px] duration-300"
                  } transition-all  ease-in-out`}
                >
                  {Obj.svg}
                </span>
                <ArrowUpRight
                  strokeWidth={1.5}
                  className={`h-[30px] md:h-[40px] w-[30px] md:w-[40px] group-hover:rotate-45 transition-all duration-300 ease-in-out text-[#4B014B]`}
                />
              </div>
              <div
                className={`flex flex-col items-start gap-2 md:gap-3 justify-center`}
              >
                <Heading2 head={Obj.head} />

                <p
                  className={`text-black/60 font-inter text-sm md:text-base leading-[170%]`}
                >
                  {Obj.para}
                </p>
              </div>
            </div>
          );
        })}
      </div>
      <Buttoncommon
        button={"Get a Qoute"}
        className={`w-[194px] mt-10 md:mt-15 lg:mt-20`}
      />
    </section>
  );
};

export default Services;
