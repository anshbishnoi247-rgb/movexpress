import { ShieldCheck, BadgeCheck } from "lucide-react";
import React from "react";

const Hero = () => {
  return (
    <section className={`max-w-332`}>
      <aside className={`max-w-[644px] w-full text-center lg:text-left`}>
        <h1
          className={`font-bold flex flex-col font-figtree text-4xl sm:text-[40px] md:text-[50px] lg:text-[60px] xl:text-[74px]  text-white leading-[115%]`}
        >
          <span>Move Smart.</span>
          <span>Move Easy.</span>
          <span>MoveXpress.</span>
        </h1>
      </aside>
      <p class="mt-3 text-base text-inter sm:text-lg text-whitelight max-w-[90%] lg:mx-0">
        Book reliable, Stress - free <br class="sm:hidden" /> removals
        Nationwide. <br /> Get a quote in 60 seconds
      </p>

      <div
        className={`flex items-center lg:justify-start flex-wrap gap-4 md:gap-5 sm:gap-8 lg:mt-6`}
      >
        <div className={`flex items-center gap-3 md:gap-4`}>
          <BadgeCheck className="text-white" size={40} />

          <p
            className={`md:text-lg font-medium text-left max-w-[125px] text-white`}
          >
            Trusted across cities
          </p>
        </div>
        <div className={`flex items-center gap-3 md:gap-4`}>
          <ShieldCheck className="text-white" size={40} />

          <p
            className={`md:text-lg font-medium text-left max-w-[125px] text-white`}
          >
            Trusted across cities
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
