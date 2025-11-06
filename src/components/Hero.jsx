import { BadgeCheck, ShieldCheck } from "lucide-react";
import map from "../assets/images/map.webp";
import { Alert, Gps, Truesthalf, Trustrate, Truststar } from "../common/Icons";

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
        <aside className="w-full py-6 px-7 bg-white z-5 relative rounded-3xl mb-2">
          <div className={`flex items-center justify-between`}>
            <div className={`flex flex-col items-start justify-center`}>
              <h2
                className={`font-semibold font-figtree text-midnight text-2xl md:text-3xl lg:text-[32px] leading-[140%]`}
              >
                Where to?
              </h2>
              <p
                className={`text-inter text-sm sm:text-base text-midnight/64 leading-[130%] md:leading-[164%]`}
              >
                Tell us your pickup and destination
              </p>
            </div>
            <p
              className={`font-inter text-xs leading-6 font-medium px-4 py-[6px] bg-[#f6f6f6] rounded-full`}
            >
              1 of 5
            </p>
          </div>
          <div className={`h-[6px] w-full rounded-full bg-[#D5D5D5] mt-4 mb-6`}>
            <div className={`h-full w-[111px] rounded-full bg-violet1`}></div>
          </div>

          <div className={`mb-5 md:mb-[33px]`}>
            <label
              className={`font-semibold text-sm sm:font-base leading-6 font-inter `}
            >
              Pickup Address
            </label>
            <div
              className={`flex items-center border-1 h-12 md:h-15 px-4 mt-1 border-[#EEEFF3] justify-center gap-3 rounded-xl`}
            >
              <Gps />
              <input
                type="text"
                className={`w-full outline-none`}
                placeholder="Enter pickup address"
              />
            </div>
          </div>
          <div className={`mb-5 md:mb-[33px]`}>
            <label
              className={`font-semibold text-sm sm:font-base leading-6 font-inter`}
            >
              Destination Address
            </label>
            <div
              className={`flex items-center border-1 h-12 md:h-15 mt-1 px-4 border-[#EEEFF3] justify-center gap-3 rounded-xl`}
            >
              <Gps />
              <input
                type="text"
                className={`w-full outline-none`}
                placeholder="Enter destination address"
              />
            </div>
          </div>

          <img
            src={map}
            alt="map"
            className={`h-[100px] md:h-[179px] w-full object-cover rounded-lg`}
          />
          <div
            className={`w-full p-3 bg-daygreen my-3 md:mb-8 md:mt-3 flex gap-2 items-center rounded-lg`}
          >
            <Alert />
            <div className={`grow-1 flex  flex-col items-start justify-center`}>
              <p
                className={`font-semibold leading-[18px] font-inter text-midgreen text-xs`}
              >
                Distance
              </p>
              <p className={`leading-[18px] font-inter text-midgreen text-xs`}>
                Between pickup and destination
              </p>
            </div>
            <p
              className={`font-semibold leading-[18px] font-inter text-midgreen text-sm`}
            >
              1<span className={`text-[10px]`}>miles</span>
            </p>
          </div>
          <div className="overflow-hidden group relative bg-vinegar rounded-xl">
            <button
              className={`rounded-xl w-full flex items-center text-white z-2 relative bg-transparent justify-center h-12 md:h-[61px] overflow-hidden font-medium text-sm sm:text-base leading-[170%] font-inter`}
            >
              Show Quote
            </button>
            <div
              className={`absolute rounded-full bg-violet1 z-1 -translate-y-[120%] left-[50%] translate-x-[-50%] w-[600px] h-100 transition-all duration-1000 ease-in-out group-hover:translate-y-[-55%]`}
            ></div>
          </div>
        </aside>
        <div
          className={`absolute w-[393px] h-[393px] top-5 -right-[22px] z-1 bg-vinegar blur-[141px] rounded-full`}
        ></div>
      </div>
    </section>
  );
};

export default Hero;
