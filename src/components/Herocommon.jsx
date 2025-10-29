import React from "react";
import Button from "../common/Button";
import { Paragraphsub } from "../common/Heading";

const Herocommon = ({ content, button }) => {
  return (
    <section className={`py-[100px] md:py-[150px] lg:py-[177px]  bg-violet1`}>
      <div
        className={`w-fit flex flex-col items-center justify-center gap-4 md:gap-6 max-w-[573px] px-5 mx-auto text-center`}
      >
        <h1
          className={`font-figtree font-medium text-3xl md:text-4xl lg:text-5xl leading-[120%] tracking-[-2px] text-white`}
        >
          {content}
        </h1>
        <Paragraphsub
          para="Reliable, Affordable & Stress-Free Relocations"
          className="!text-customgray"
        />

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
