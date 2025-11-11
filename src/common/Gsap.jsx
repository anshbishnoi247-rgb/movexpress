import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const ColorScroll = ({ content }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const words = containerRef.current.querySelectorAll(".word");

    gsap.to(words, {
      color: "#3f3f3f", // target color for each word

      stagger: 1, // delay between words
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 90%",
        end: "bottom 70%",
        scrub: true,
      },
    });

    // cleanup on unmount
    return () => ScrollTrigger.getAll().forEach((st) => st.kill());
  }, []);

  return (
    <section
      data-aos="fade-up"
      className="py-20 px-5 bg-commonbg flex flex-col items-center justify-center"
    >
      <p ref={containerRef} className="paragraph-gsap-style">
        {content.split(" ").map((word, i) => (
          <span key={i} className="word inline-block w-fit mr-2">
            {word}
          </span>
        ))}
      </p>
    </section>
  );
};
