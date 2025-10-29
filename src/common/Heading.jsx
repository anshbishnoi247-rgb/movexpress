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
        hover:after:w-full after:bottom-0 after:left-[50%] after:translate-x-[-50%]  after:transition-all after:duartion-600
         after:ease-in-out`}
    >
      {content}
    </a>
  );
};
