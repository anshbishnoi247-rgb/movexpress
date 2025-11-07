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

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const TextScrollTrigger = ({ content }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const el = containerRef.current;
    const words = el.querySelectorAll("span");

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: el,
        start: "top 80%", // start animating when top of section hits 80% of viewport
        toggleActions: "play none none reverse",
      },
    });

    tl.fromTo(
      words,
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.6,
        ease: "power3.out",
        stagger: 0.06, // delay between each word
      }
    );

    return () => {
      tl.scrollTrigger?.kill();
      tl.kill();
    };
  }, []);

  return (
    <section className="py-20 px-5 bg-commonbg flex flex-col items-center justify-center min-h-screen">
      <p
        ref={containerRef}
        className="font-bricolage font-medium text-xl md:text-2xl xl:text-3xl leading-[160%] tracking-[-0.5px] mx-auto max-w-[900px] text-blackolive text-center"
      >
        {content
          ? content.split(" ").map((word, i) => (
              <span
                key={i}
                className="inline-block opacity-0 font-bricolage font-medium text-xl md:text-2xl xl:text-3xl leading-[160%] tracking-[-0.5px] mx-auto max-w-[900px] text-blackolive text-center "
              >
                {word}
              </span>
            ))
          : null}
      </p>
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

export const SignupHeading = ({ content }) => {
  return (
    <h2
      className={`font-semibold font-inter text-violet1 text-3xl md:text-4xl lg:text-5xl leading-[140%]`}
    >
      {content}
    </h2>
  );
};

export const LabelHeading = ({ content }) => {
  return (
    <h3 className="font-normal font-inter text-sm leading-[164%] text-violet1 text-nowrap px-4">
      {content}
    </h3>
  );
};

export const TimeHeading = ({ content }) => {
  return (
    <p className="font-inter font-normal text-sm md:text-base text-white leading-[170%] tracking-[-0.5px]">
      {content}
    </p>
  );
};

export const WithParagraph = ({ content, className }) => {
  return (
    <p
      className={`text-inter ${className} font-normal text-paragray text-sm md:text-base leading-[170%]`}
    >
      {content}
    </p>
  );
};

export const WithHeading = ({ content }) => {
  return (
    <h2 className="font-figtree font-medium text-headingblue text-2xl leading-[140%]">
      {content}
    </h2>
  );
};

export const WithCardHeading = ({ content }) => {
  return (
    <h2 className="font-figtree text-base md:text-xl lg:text-xl leading-[160%] font-semibold">
      {content}
    </h2>
  );
};
