import { Link } from "react-router";

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
    <Link to={{ pathname: href }} className={`link-list-style`}>
      {content}
    </Link>
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
