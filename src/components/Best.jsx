import {
  HeadingPrimary,
  Headingsecondary,
  Paragraph,
  Paragraphsub,
} from "../common/Heading";

const Best = ({
  classNamebox,
  classNamehead,
  classNameparent,
  list,
  head,
  para,
  classNameboxhead,
  classNamesection,
}) => {
  return (
    <section className={`lg:py-20 md:py-15 py-10 bg-white ${classNamesection}`}>
      <div
        className={`flex flex-col ${classNamehead} items-center justify-center gap-[18px] max-w-[898px] px-5 lg:px-0 mx-auto text-center`}
      >
        <HeadingPrimary
          className={`tracking-[-1px] leading-[125%]`}
          head={head}
        />
        <Paragraph para={para} />
      </div>
      <div
        className={`flex items-center flex-wrap ${classNameparent} justify-center mt-14 gap-6 sm:gap-8 md:gap-12 px-5 w-fit mx-auto`}
      >
        {list &&
          list.map((obj, index) => {
            return (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-anchor-placement="top-bottom"
                className={`flex flex-col items-center group justify-center hover:shadow-md transition-all durtation-300 ease-in-out max-w-[287px] text-center w-full rounded-2xl ${classNamebox} p-4 md:p-6 gap-4 md:gap-6`}
              >
                <span className="group-hover:translate-x-2 transition-all duratiion-300 ease-in-out">
                  {obj.svg}
                </span>
                <div
                  className={`flex flex-col ${classNameboxhead} gap-4 items-center justify-center 
                `}
                >
                  <Headingsecondary head={obj.name} />
                  <Paragraphsub para={obj.para} />
                </div>
              </div>
            );
          })}
      </div>
    </section>
  );
};

export default Best;
