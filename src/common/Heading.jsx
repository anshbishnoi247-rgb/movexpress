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
      className={`font-inter ${className} font-medium text-lg sm:text-xl md:text-2xl tracking-[-1px] leading-[150%] text-eerieblack`}
    >
      {head}
    </h1>
  );
};

export const ListHeading = ({ content }) => {
  return (
    <h3
      className={`font-inter font-semibold text-lg leading-[150%] text-violetprimary`}
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
      className={`font-semibold font-inter text-violetprimary text-3xl md:text-4xl lg:text-5xl leading-[140%]`}
    >
      {content}
    </h2>
  );
};

export const LabelHeading = ({ content }) => {
  return (
    <h3 className="font-normal font-inter text-sm leading-[164%] text-violetprimary text-nowrap px-4">
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
      className={`font-inter ${className} font-normal text-paragray text-sm md:text-base leading-[170%]`}
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

export const ChooseVanHeading = ({ content, paragraphcontent }) => {
  return (
    <article className="flex items-center flex-col text-center w-fit mx-auto gap-1">
      <h3 className="text-xl text-eerieblack font-semibold leading-[150%] font-inter">
        {content}
      </h3>
      <p className="font-inter text-sm text-obsidian">{paragraphcontent}</p>
    </article>
  );
};

export const ChooseVanHeadingBox = ({ heading, paragraph, subparagraph }) => {
  return (
    <div className="flex flex-col items-start justify-center">
      <h3 className="font-bold text-sm text-eerieblack font-wix">{heading}</h3>
      <p className="text-xs text-sleet  font-inter">{paragraph}</p>
      <p className="text-xs mt-1 font-figtree">{subparagraph}</p>
    </div>
  );
};

export const Tags = ({ tag, key }) => {
  return (
    <p
      key={key}
      className="text-xs font-outfit bg-violetprimary/10 px-2 py-1 rounded-full"
    >
      {tag}
    </p>
  );
};

export const HeadingTime = ({ heading, className }) => {
  return (
    <h3
      className={`${className} font-semibold text-lg font-inter text-midnightsecondary`}
    >
      {heading}
    </h3>
  );
};

export const TimeParagraph = ({ content }) => {
  return (
    <p className="font-semibold font-inter text-violetprimary bg-violetprimary/5 px-2.5 py-0.5 rounded-lg text-sm">
      {content}
    </p>
  );
};

export const SubTimeParagraph = ({ content }) => {
  return (
    <p className={`font-inter text-obsidian font-medium text-sm`}>{content}</p>
  );
};

export const TotalTimePargraph = ({ content, className }) => {
  return (
    <p className={`${className} font-inter font-bold text-white`}>{content}</p>
  );
};

export const EstimationParagraph = ({ content }) => {
  return (
    <p className="font-wix text-sm mt-4 border-1 p-3 rounded-lg bg-vineagar/10 border-vinegar">
      {content}
    </p>
  );
};

export const LabelSecondary = ({ label }) => {
  return (
    <label className="text-sm font-semibold text-salute mb-2">{label}</label>
  );
};

export const PlacholderParagraph = ({ content ,className }) => {
  return <p className={`${className} text-violetprimary/50 font-inter text-sm md:text-base`}>{content}</p>;
}; 
