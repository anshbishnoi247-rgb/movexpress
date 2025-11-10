import Button from "../common/Button";
import { HeadingPrimary, Paragraph } from "../common/Heading";
import { whylist } from "../common/Helper";

const Why = () => {
  
  return (
    <section className={`xl:py-25 lg:py-20 md:py-15 py-10 bg-commonbg`}>
      <div
        className={`flex flex-col items-center justify-center gap-[18px] max-w-[806px] px-5 lg:px-0 mx-auto text-center`}
      >
        <HeadingPrimary
          className={`tracking-[-2px] leading-[120%]`}
          head={"Why Customer Trust MoveXpress"}
        />
        <Paragraph
          para={`Our customers trust MoveXpress because we treat every move like it’s our own. With a dedicated team, secure handling, and reliable service, we ensure your belongings are in safe hands from start to finish.          `}
        />
      </div>

      <div
        className={`mt-15 flex flex-wrap items-center justify-center gap-4 md:gap-6 lg:gap-[30px] px-5 w-fit mx-auto`}
      >
        {whylist.map((obj, index) => {
          return (
            <div
              data-aos="fade-up"
              data-aos-anchor-placement="top-bottom"
              key={index}
              className={`flex flex-col items-center justify-center group hover:shadow-lg transition-all duration-500 ease-in-out rounded-2xl text-center bg-white py-4 md:py-6 lg:py-8 px-4 md:px-6 gap-[18px] max-w-[301.5px]`}
            >
              <span className="group-hover:scale-105 transition-all duration-300 ease-in-out">
                {obj.svg}
              </span>

              <h2
                className={`font-figtree ${
                  (index == 1 || index == 3) && "px-10"
                } ${
                  index == 2 && "md:h-20"
                } text-violet1 text-2xl md:text-[28px] lg:text-[32px] font-semibold leading-[125%]`}
              >
                {obj.name}
              </h2>
              <p
                className={`font-wix font-medium text-base md:text-lg leading-[170%] text-[#3B3B3B] ${
                  index == 0 ? "px-3" : "md:px-10 px-12"
                }`}
              >
                {obj.para}
              </p>
            </div>
          );
        })}
      </div>

      <Button
        button={"Get a Qoute"}
        className={`w-[194px] mt-10 md:mt-15 lg:mt-20`}
      />
    </section>
  );
};

export default Why;
