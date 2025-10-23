import { BadgeCheck, ShieldCheck } from "lucide-react";
import { Truesthalf, Trustrate, Truststar } from "../common/Icons";

const Hero = () => {
  return (
    <section
      className={`max-w-332 mx-auto flex items-end relative pt-7 sm:mt-10 md:mt-12 xl:mt-16 `}
    >
      <aside className={`max-w-[644px] w-full text-center lg:text-left`}>
        <h1
          className={`font-bold flex flex-col font-figtree text-4xl sm:text-[40px] md:text-[50px] lg:text-[60px] xl:text-[74px]  text-white leading-[115%]`}
        >
          <span>Move Smart.</span>
          <span>Move Easy.</span>
          <span>MoveXpress.</span>
        </h1>

        <p class="mt-3 text-base font-inter sm:text-lg text-whitelight max-w-[90%] lg:mx-0">
          Book reliable, Stress - free <br class="sm:hidden" /> removals
          Nationwide. <br /> Get a quote in 60 seconds
        </p>

        <div
          className={`flex items-center lg:justify-start flex-wrap gap-4 md:gap-5 sm:gap-8 lg:mt-6`}
        >
          <div className={`flex items-center gap-3 md:gap-4`}>
            <BadgeCheck className="text-white" size={40} />

            <p
              className={`md:text-lg font-medium font-inter text-left max-w-[126px] text-white`}
            >
              Trusted across cities
            </p>
          </div>
          <div className={`flex items-center gap-3 md:gap-4`}>
            <ShieldCheck className="text-white" size={40} />

            <p
              className={`md:text-lg font-medium font-inter text-left max-w-[125px] text-white`}
            >
              Licensed & Insured
            </p>
          </div>
        </div>

        <div className="mt-16 bg-vinegar w-full flex flex-col items-center gap-[10px] rounded-t-lg max-w-[318px] ">
          <div className={`flex items-center gap-1 justify-center`}>
            <Truststar />
            <h2 className="font-inter font-semibold text-[40px] leading-[40px] text-white">
              Trustpilot
            </h2>
          </div>
          <div class={`flex items-center gap-1 justify-center`}>
            <Trustrate />
            <Trustrate />
            <Trustrate />
            <Trustrate />
            <Truesthalf />
          </div>
          <p className="font-inter font-medium text-xl leading-[170%] text-white">
            Rated 4.9/5.0
          </p>
        </div>
      </aside>
    </section>
  );
};

export default Hero;
