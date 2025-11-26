import { ArrowRight, ChevronRight, Minus, Plus } from "lucide-react";
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
import { useState } from "react";

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

export const AddItemsList = ({
  item,
  quantity,
  quantities,
  search,
  setQuantities,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleChange = (index, value, list) => {
    setQuantities((prev) => ({
      ...prev,
      [item]: {
        ...(prev[item] || {}),
        [list]: value,
      },
    }));
  };

  return (
    <div>
      {(!search || search == item.toLowerCase()) && (
        <div
          onClick={() => setIsOpen((prev) => !prev)}
          className="flex text-sm text-black/80 shadow-md font-semibold justify-between rounded-xl p-3 hover:bg-blue-300/10"
        >
          <h3>{item}</h3>
          <span
            className={`transition-all duration-300 ${
              isOpen ? "rotate-90" : "rotate-0"
            }`}
          >
            <ChevronRight />
          </span>
        </div>
      )}
      {/* Items */}
      {isOpen && (
        <div className="px-3 py-2 flex flex-col gap-2 transition-all duration-500">
          {quantity.map((list, i) => (
            <div
              key={i}
              className="flex justify-between text-xs shadow-sm items-center bg-blue-50 rounded-lg p-2"
            >
              <p>{list}</p>

              <div className="flex gap-2 items-center">
                <button
                  type="button"
                  onClick={() =>
                    handleChange(
                      i,
                      Math.max((quantities[item]?.[list] || 0) - 1, 0),
                      list
                    )
                  }
                >
                  <Minus size={10} />
                </button>

                {quantities[item]?.[list] || 0}

                <button
                  type="button"
                  onClick={() =>
                    handleChange(i, (quantities[item]?.[list] || 0) + 1, list)
                  }
                >
                  <Plus size={10} />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
