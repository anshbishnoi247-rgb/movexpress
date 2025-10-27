import React from "react";
import { Buttoncommon } from "../common/Button";

const Book = () => {
  return (
    <section className={`py-[100px] md:py-[150px] lg:py-[177px]  bg-violet1`}>
      <div
        className={`w-fit flex flex-col items-center justify-center gap-6  max-w-[573px] px-5  mx-auto text-center`}
      >
        <h1
          className={`font-figtree font-medium text-3xl md:text-4xl lg:text-5xl leading-[120%] tracking-[-2px] text-white`}
        >
          Ready to book your Man & Van Service ?
        </h1>
        <Buttoncommon
          button="Get Instant Quote Now"
          className={`w-[250px] md:w-[309px]`}
          subsubclassName={`!bg-mist`}
          subclassName={`hover:text-violet1`}
        />
      </div>
    </section>
  );
};

export default Book;
