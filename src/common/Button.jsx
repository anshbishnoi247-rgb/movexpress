import React from "react";

export const Buttoncommon = ({ button, className }) => {
  return (
    <div
      className={`overflow-hidden ${className} mx-auto group relative bg-vinegar rounded-xl`}
    >
      <button
        className={`rounded-xl w-full flex items-center text-white z-2 relative bg-transparent justify-center  h-12 md:h-[61px] overflow-hidden font-medium text-sm sm:text-base leading-[170%] font-inter`}
      >
        {button}
      </button>

      <div
        className={`absolute rounded-xl bg-violet1 z-1  left-[50%] top-[50%] translate-[-50%] w-0 h-0 transition-all duration-500 ease-in-out group-hover:w-50 group-hover:h-16`}
      ></div>
    </div>
  );
};
