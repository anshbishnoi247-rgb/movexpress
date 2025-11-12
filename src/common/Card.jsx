import { ArrowRight } from "lucide-react";
import {
  Paragraph,
  SubHeading,
  WithCardHeading,
  WithParagraph,
} from "./Heading";
import {
  blogssecondarylist,
  chooselist,
  movinglist,
  pickuplist,
  registartionlist,
  reviewlist,
  selectlist,
} from "./Helper";

export const WithCard = () => {
  return (
    <>
      <div className="flex flex-col sm:flex-row sm:items-center justify-start gap-2 md:gap-4 lg:gap-6">
        {pickuplist.map((obj, index) => {
          return (
            <div
              key={index}
              className="flex flex-col max-w-[352px] w-full rounded-2xl gap-3 items-start p-6 bg-commonbg"
            >
              <WithCardHeading content={obj.head} />
              <WithParagraph className="max-w-[220px]" content={obj.para} />
            </div>
          );
        })}
      </div>
    </>
  );
};

export const WithCardGrid = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 md:gap-4 lg:gap-6">
      {" "}
      {chooselist.map((obj, index) => {
        return (
          <div
            key={index}
            className="flex flex-col max-w-[352px] w-full rounded-2xl gap-3 items-start p-6 bg-commonbg"
          >
            <WithCardHeading content={obj.head} />
            <WithParagraph
              className={`${
                index === 0 || index === 2 ? "max-w-[238px]" : "max-w-[200px]"
              }`}
              content={obj.para}
            />
          </div>
        );
      })}
    </div>
  );
};

export const WithCardGridSecondary = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 md:gap-4 lg:gap-6">
      {" "}
      {selectlist.map((obj, index) => {
        return (
          <div
            key={index}
            className="flex flex-col max-w-[352px] w-full rounded-2xl gap-3 items-start p-6 bg-commonbg"
          >
            <WithCardHeading content={obj.head} />
            <WithParagraph
              className={`${
                index === 0 || index === 2 ? "max-w-[230px]" : "max-w-[270px]"
              }`}
              content={obj.para}
            />
          </div>
        );
      })}
    </div>
  );
};

export const WithCardGridSubSecondary = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 md:gap-4 lg:gap-6">
      {" "}
      {movinglist.map((obj, index) => {
        return (
          <div
            key={index}
            className="flex flex-col max-w-[352px] w-full rounded-2xl gap-3 items-start p-6 bg-commonbg"
          >
            <WithCardHeading content={obj.head} />
            <WithParagraph
              className={`${
                index === 0 || index === 2 ? "max-w-[230px]" : "max-w-[240px]"
              }`}
              content={obj.para}
            />
          </div>
        );
      })}
    </div>
  );
};

export const WithCardReview = ({ max, min }) => {
  return (
    <div className="grid grid-cols-2 gap-2 md:gap-4 lg:gap-6">
      {" "}
      {reviewlist.slice(min, max).map((obj, index) => {
        return (
          <div
            key={index}
            className="flex flex-col max-w-[352px] w-full rounded-2xl gap-3 items-start p-6 bg-commonbg"
          >
            <WithCardHeading content={obj.head} />
          </div>
        );
      })}
    </div>
  );
};

export const WithCardSecondary = () => {
  return (
    <>
      <div className="flex flex-col items-start justify-center gap-6">
        {registartionlist.map((obj, index) => {
          return (
            <div
              key={index}
              className="flex flex-col max-w-[540px] w-full rounded-2xl gap-3 items-start"
            >
              <WithCardHeading content={obj.head} />
              <WithParagraph content={obj.para} />
            </div>
          );
        })}
      </div>
    </>
  );
};

export const WithCardBlogSecondary = () => {
  return (
    <>
      <div className="flex flex-col items-start w-full justify-center gap-3">
        {blogssecondarylist.map((obj, index) => {
          return (
            <div key={index} className="group cards-style-div">
              <SubHeading
                className={`mb-4 max-w-[321px]
                              `}
                head={obj.head}
              />
              <Paragraph para={obj.para} />

              <a href={`#`} className={`button-up-style`}>
                {" "}
                Learn more{" "}
                <ArrowRight
                  className={`group-hover:translate-x-3 transition-all duration-300 linear`}
                />
              </a>
            </div>
          );
        })}
      </div>
    </>
  );
};
