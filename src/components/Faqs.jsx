import React, { useState } from "react";
import { Para, Heading1 } from "../common/Heading";
import { Minus } from "lucide-react";
import { faqlist } from "../common/Helper";

const Faqs = () => {
  const [activetab, setActivetab] = useState(0);
  return (
    <section className={`xl:py-25 lg:py-20 md:py-15 py-10 bg-commonbg`}>
      <div
        className={`flex flex-col items-center justify-center gap-[18px] max-w-[806px] px-5 lg:px-0 mx-auto text-center`}
      >
        <Heading1
          className={`tracking-[-2px] leading-[120%]`}
          head={"Frequently Asked Questions"}
        />
        <Para
          para={`We understand that moving can feel overwhelming. That’s why we’ve compiled answers to the most frequently asked questions to help you plan your move with confidence.`}
        />
      </div>
      <div
        className={`mt-14 flex flex-col items-center justify-center gap-4 px-5 mx-auto`}
      >
        {faqlist.map((obj, index) => {
          return (
            <div
              key={index}
              onClick={() => {
                setActivetab(activetab === index ? null : index);
              }}
              className={`max-w-[637px] border-[#0C0E171F] border-1 ${
                activetab == index ? "bg-white" : "bg-transparent"
              } transition-all  duration-300 ease-in-out w-full flex flex-col items-start rounded-xl justify-center p-4 md:p-6 lg:px-8 lg:py-[26px]`}
            >
              <div className={`flex items-center justify-between w-full`}>
                <h1 className="font-inter font-medium text-lg sm:text-xl md:text-2xl tracking-[-1px] leading-[150%] text-[#1E1E1E]">
                  {""}
                  {obj.question}
                </h1>
                <div className={`relative`}>
                  <Minus />
                  <Minus
                    className={`absolute top-0 transition-all duration-300 ease-in-out left-0 ${
                      activetab == index && "rotate-90"
                    }`}
                  />
                </div>
              </div>
              <div
                className={`overflow-hidden ${
                  activetab == index ? "sm:h-18 h-21 mt-4 md:mt-8" : "h-0 mt-0"
                } transition-all duration-300 ease-in-out`}
              >
                <p
                  className={`font-inter font-normal text-sm sm:text-base leading-[150%] tracking-[-0.3px] text-[#3D3F40]`}
                >
                  {obj.answer}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Faqs;
