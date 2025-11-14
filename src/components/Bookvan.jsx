import React from "react";

import Whereto from "./Whereto";

const Bookvan = () => {
  return (
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
        <div className={`h-full w-[111px] rounded-full bg-violetprimary`}></div>
      </div>
      <Whereto />
    </aside>
  );
};

export default Bookvan;
