export const HeadingPrimary = ({ head, className }) => {
  return (
    <h1
      data-aos="fade-up"
      data-aos-anchor-placement="top-bottom"
      className={`${className} font-medium text-3xl md:text-4xl lg:text-5xl font-figtree text-[#010528]`}
    >
      {head}
    </h1>
  );
};

export const Paragraph = ({ para, className }) => {
  return (
    <p
      data-aos="fade-up"
      data-aos-anchor-placement="top-bottom"
      className={`${className} paragraph-text-style`}
    >
      {para}
    </p>
  );
};

export const Headingsecondary = ({ head }) => {
  return (
    <h2
      className={`font-figtree font-semibold text-lg md:text-xl leading-[160%] text-black`}
    >
      {head}
    </h2>
  );
};

export const Paragraphsub = ({ para, className }) => {
  return (
    <p
      className={`${className} text-black/60 font-normal text-sm md:text-base leading-[170%] font-inter`}
    >
      {para}
    </p>
  );
};

export const SubHeading = ({ head, className }) => {
  return (
    <h1
      className={`font-inter ${className} font-medium text-lg sm:text-xl md:text-2xl tracking-[-1px] leading-[150%] text-[#1E1E1E]`}
    >
      {head}
    </h1>
  );
};

export const ListHeading = ({ content }) => {
  return (
    <h3
      className={`font-inter font-semibold text-lg leading-[150%] text-violet1`}
    >
      {content}
    </h3>
  );
};

export const ListLink = ({ content, href }) => {
  return (
    <a
      href={href}
      className={`font-inter font-medium text-sm md:text-base lg:text-lg  leading-[150%] relative after:absolute 
        after:content-[] after:w-0 after:bg-black after:h-[2px] after:rounded-full 
        hover:after:w-full after:bottom-0 after:left-[50%] after:translate-x-[-50%] after:transition-all after:duration-500
         after:ease-in-out`}
    >
      {content}
    </a>
  );
};

export const SubHeadingSecondary = ({ content, className, span }) => {
  return (
    <section className="py-10 md:py-15 lg:py-20 px-5 bg-commonbg">
      <h1
        className={`font-bricolage font-medium text-3xl md:text-4xl xl:text-5xl leading-[132%] tracking-[-1px] mx-auto max-w-[1296px] text-blackolive`}
      >
        {content}
        <span className={`${className}`}>{span}</span>
      </h1>
    </section>
  );
};

export const DownloadHeading = ({ content, className }) => {
  return (
    <h4 className={`${className} text-white font-inter text-sm leading-[100%]`}>
      {content}
    </h4>
  );
};

export const HeadingStore = ({ content }) => {
  return (
    <h3 className="font-inter font-medium text-white text-lg md:text-2xl leading-[100%]">
      {content}
    </h3>
  );
};

import React from "react";

export const SignupHeading = ({ content }) => {
  return (
    <h2
      className={`font-semibold font-inter text-violet1 text-3xl md:text-4xl lg:text-5xl leading-[140%]`}
    >
      {content}
    </h2>
  );
};
