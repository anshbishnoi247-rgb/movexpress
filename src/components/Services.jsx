import { Heading1, Para } from "../common/Heading";
import React from "react";
import { ArrowUpRight } from "lucide-react";
import { services } from "../common/Helper";

const Services = () => {
  return (
    <section id="services" className="py-20 bg-commonbg">
      <div
        className={`flex flex-col items-center justify-center gap-[18px] max-w-[898px] mx-auto text-center`}
      >
        <Heading1 head={"Our Top Rated Services"} />
        <Para
          para={
            "Count on us as your dependable partner for exceptional Moving solutions that turn spaces into pristine havens. Our dedicated team offers a wide array of services tailored to your unique requirements. "
          }
        />
      </div>

      <div className={`grid grid-cols-3 gap-6 max-w-fit mx-auto mt-14`}>
        {services.map((Obj, index) => {
          return (
            <div
              key={index}
              className={`flex flex-col items-start justify-center max-w-[310px] gap-6 p-6 w-full rounded-2xl group bg-white`}
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
                  className={`h-[40px] w-[40px] group-hover:rotate-45 transition-all duration-300 ease-in-out text-[#4B014B]`}
                />
              </div>
              <div className={`flex flex-col items-start gap-3 justify-center`}>
                <h2
                  className={`font-figtree font-semibold text-xl leading-[160%] text-black`}
                >
                  {Obj.head}
                </h2>
                <p
                  className={`text-black/60 font-inter text-base leading-[170%]`}
                >
                  {Obj.para}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Services;
