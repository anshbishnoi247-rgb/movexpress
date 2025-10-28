import React from "react";
import Logo from "../assets/images/favicon.webp";

const Logopamplate = ({ className, classNameImg, classNameParagraph }) => {
  return (
    <div className={`flex items-center justify-center gap-2`}>
      <img
        src={Logo}
        alt="logo"
        className={`${classNameImg} max-w-[50px] md:max-w-[70px]`}
      />
      <div className={`flex flex-col items-start justify-center`}>
        <h1
          className={`font-figtree ${className} font-extrabold leading-[120%] italic text-violet1 text-[28px] md:text-[32px]`}
        >
          MOVEXPRESS
        </h1>
        <p
          className={`font-figtree ${classNameParagraph} font-medium text-sm md:text-base italic leading-[120%] text-violet1/80`}
        >
          Expressly Delivered
        </p>
      </div>
    </div>
  );
};

export default Logopamplate;
