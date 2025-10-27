export const Heading1 = ({ head, className }) => {
  return (
    <h1
      className={`${className} font-medium text-3xl md:text-4xl lg:text-5xl font-figtree text-[#010528]`}
    >
      {head}
    </h1>
  );
};

export const Para = ({ para }) => {
  return (
    <p className="text-[#3B3B3B] font-normal text-sm sm:text-base lg:text-lg leading-[170%] font-inter">
      {para}
    </p>
  );
};

import React from 'react'

export const Heading2 = ({ head }) => {
  return (
    <h2
      className={`font-figtree font-semibold text-lg md:text-xl leading-[160%] text-black`}
    >
      {head}
    </h2>
  );
};


export const Para2 = ({ para, className }) => {
  return (
    <p
      className={`${className} text-black/60 font-normal text-sm md:text-base leading-[170%] font-inter`}
    >
      {para}
    </p>
  );
};
