import { BadgeCheck, ShieldCheck } from "lucide-react";

import { Alert, Gps, Truesthalf, Trustrate, Truststar } from "../common/Icons";
import Bookvan from "./Bookvan";

const Hero = () => {
  return (
    <section
      className={`max-w-332 mx-auto flex flex-col-reverse md:flex-row justify-between items-center lg:items-end gap-5 md:gap-0 mt-7 sm:mt-10 md:mt-12 xl:mt-16 px-4`}
    >
      <aside
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
        className={`max-w-[644px] w-full text-center md:text-left`}
      >
        <h1
          className={`font-bold flex flex-col font-figtree text-4xl sm:text-[40px] md:text-[50px] lg:text-[60px] xl:text-[74px]  text-white leading-[115%]`}
        >
          <span className="md:mb-3">Move Smart.</span>
          <span className="md:mb-3">Move Easy.</span>
          <span>MoveXpress.</span>
        </h1>

        <p className="mt-6 md:mt-3 text-sm font-inter sm:text-base md:text-lg text-whitelight max-w-[90%] mx-auto md:mx-0">
          ReadyToBook reliable, Stress - free <br className="sm:hidden" />{" "}
          removals Nationwide. <br /> Get a quote in 60 seconds
        </p>

        <div
          className={`flex items-center justify-center flex-col md:flex-row md:justify-start gap-4 md:gap-5 sm:gap-8 mt-6 lg:mt-[42px]`}
        >
          <div className={`flex items-center gap-3 md:gap-4`}>
            <BadgeCheck className="text-white" strokeWidth={1} size={40} />

            <p
              className={`md:text-lg font-medium font-inter text-left max-w-[126px] text-white`}
            >
              Trusted across cities
            </p>
          </div>
          <div className={`flex items-center gap-3 md:gap-4`}>
            <ShieldCheck className="text-white" strokeWidth={1} size={40} />

            <p
              className={`md:text-lg font-medium font-inter text-left max-w-[125px] text-white`}
            >
              Licensed & Insured
            </p>
          </div>
        </div>

        <div className="mt-10 md:mt-19 bg-vinegar w-full flex flex-col items-center gap-[10px]  py-5 md:py-[28.5px] rounded-t-lg mx-auto md:mx-0 max-w-[318px] ">
          <div className={`flex items-center gap-1 justify-center`}>
            <Truststar />
            <h2 className="font-inter font-semibold text-3xl md:text-[40px] leading-[40px] text-white">
              Trustpilot
            </h2>
          </div>
          <div className={`flex items-center gap-1 justify-center`}>
            {[0, 1, 2, 3].map((obj, index) => (
              <Trustrate key={index} />
            ))}
            <Truesthalf />
          </div>
          <p className="font-inter font-medium text-xl leading-[170%] text-white">
            Rated 4.9/5.0
          </p>
        </div>
      </aside>

      <div
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
        className="relative max-w-[644px] w-full"
      >
        <Bookvan />
        <div
          className={`absolute w-[393px] h-[393px] top-5 -right-[22px] z-1 bg-vinegar hidden md:block blur-[141px] rounded-full`}
        ></div>
      </div>
    </section>
  );
};

export default Hero;
