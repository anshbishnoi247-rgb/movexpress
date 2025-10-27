import { Heading1, Heading2, Para2 } from "../common/Heading";
import React from "react";
import { Para } from "../common/Heading";
import { worklist } from "../common/Helper";

const Work = () => {
  return (
    <section className="lg:py-20 md:py-15 py-10 bg-white">
      <div
        className={`flex flex-col items-center justify-center gap-[18px] max-w-[898px] px-5 lg:px-0 mx-auto text-center`}
      >
        <Heading1
          className={`tracking-[-1px] leading-[125%]`}
          head={"Our Work Process"}
        />
        <Para
          para={
            "Count on us as your dependable partner for exceptional Moving solutions that turn spaces into pristine havens. Our dedicated team offers a wide array of services tailored to your unique requirements."
          }
        />
      </div>
      <div
        className={`flex items-center flex-wrap justify-center mt-14 gap-6 sm:gap-8 md:gap-12 px-5 w-fit mx-auto`}
      >
        {worklist.map((obj, index) => {
          return (
            <div
              className={`flex flex-col items-center jsutify-center max-w-[287px] w-full rounded-2xl bg-commonbg p-4 md:p-6 gap-4 md:gap-6`}
            >
              {obj.svg}
              <div
                className={`flex flex-col text-center items-center justify-center ${
                  index == 0 ? "px-7" : "px-11"
                }`}
              >
                <Para2 para={`Step ${index + 1}`} className={`mb-[1px]`} />
                <Heading2 head={obj.name} />
                <Para2 para={obj.para} className={`mt-3`} />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Work;
