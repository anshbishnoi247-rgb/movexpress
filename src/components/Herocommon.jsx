import { Calender, CustomClock } from "../common/Icons";
import Button from "../common/Button";
import { Paragraphsub, TimeHeading } from "../common/Heading";

const HeroCommon = ({ content, button, para, classNameHeading, time }) => {
  return (
    <section className={`py-15 md:py-[90px] lg:py-[116px]  bg-violet1`}>
      <div
        className={`w-fit flex flex-col items-center justify-center gap-4 md:gap-6 px-5 mx-auto text-center`}
      >
        {time ? (
          <div className="flex items-center gap-8 justify-center">
            <div className="flex gap-3 items-center justify-center">
              <Calender />
              <TimeHeading content="05 May, 2023" />
            </div>
            <div className="flex gap-3 items-center justify-center">
              <CustomClock />
              <TimeHeading content="Read 10 Min" />
            </div>
          </div>
        ) : null}
        <h1
          className={`${classNameHeading} font-figtree font-medium text-3xl md:text-5xl lg:text-[64px] leading-[120%] tracking-[-2px] text-white`}
        >
          {content}
        </h1>

        {para ? (
          <Paragraphsub para={para} className="!text-customgray" />
        ) : null}

        {button ? (
          <Button
            button={button}
            className={`w-[194px]`}
            subsubclassName={`!bg-mist`}
            subclassName={`hover:text-violet1`}
          />
        ) : null}
      </div>
    </section>
  );
};

export default HeroCommon;
