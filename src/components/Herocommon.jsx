import Button from "../common/Button";
import { Paragraphsub } from "../common/Heading";

const Herocommon = ({ content, button, para }) => {
  return (
    <section className={`py-15 md:py-[90px] lg:py-[116px]  bg-violet1`}>
      <div
        className={`w-fit flex flex-col items-center justify-center gap-4 md:gap-6  px-5 mx-auto text-center`}
      >
        <h1
          className={`font-figtree font-medium text-3xl md:text-5xl lg:text-[64px] leading-[120%] tracking-[-2px] text-white`}
        >
          {content}
        </h1>
        <Paragraphsub para={para} className="!text-customgray" />

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

export default Herocommon;
