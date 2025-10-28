export const HeadingPrimary = ({ head, className }) => {
  return (
    <h1
      data-aos="fade-up"
      className={`${className} font-medium text-3xl md:text-4xl lg:text-5xl font-figtree text-[#010528]`}
    >
      {head}
    </h1>
  );
};

export const Paragraph = ({ para }) => {
  return (
    <p
      data-aos="fade-up"
      className="text-[#3B3B3B] font-normal text-sm sm:text-base lg:text-lg leading-[170%] font-inter"
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
