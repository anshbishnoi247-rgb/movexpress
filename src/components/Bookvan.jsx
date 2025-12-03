import { useEffect, useState } from "react";

import Whereto from "./Whereto";
import ChooseVan from "./ChooseVan";
import When from "./When";
import WhatMoving from "./WhatMoving";
import { useNavigate, useSearchParams } from "react-router";
import AddHelper from "./AddHelper";

const Bookvan = ({ setHide }) => {
  const navigate = useNavigate();
  const [pageNo, setPageNo] = useState(1);
  const [heading, setHeading] = useState("Where to?");
  const [pargraph, setPargraph] = useState(
    "Tell us your pickup and destination"
  );
  const [searchParams] = useSearchParams();
  const [formSteps, setFormsSteps] = useState("pickup-address");
  const params = searchParams.get("tab");

  useEffect(() => {
    if (params) {
      setFormsSteps(params);
    }
    if (params == "choose-your-van") {
      setPageNo(2);

      setHeading("Choose Your Van");

      setPargraph("Select your perfect vehicle");
    } else if (params == "when-moving") {
      setPageNo(3);

      setHeading("When?"), setPargraph("Pick your preferred date and time");
    } else if (params == "whats-moving") {
      setPageNo(4);
      setHeading("What are you moving?"),
        setPargraph("Choose your moving approach");
    } else if (params == "select-helper") {
      setPageNo(5);
      setHeading("Need Help?"), setPargraph("Choose your assistance level");
    } else {
      setPageNo(1);
      setHeading("Where to ?"),
        setPargraph("Tell us your pickup and destination");
    }
  }, [params]);

  return (
    <>
      <aside
        className={`w-full lg:py-6 p-4 lg:px-7 bg-white z-5 relative rounded-3xl mb-2 `}
      >
        <div className={`flex items-center justify-between`}>
          <div className={`flex flex-col items-start justify-center`}>
            <h2
              className={`font-normal font-figtree text-midnight text-2xl md:text-3xl lg:text-[32px] leading-[140%]`}
            >
              {heading}
            </h2>
            <p
              className={`font-inter text-sm sm:text-base text-midnight/64 leading-[130%] md:leading-[164%]`}
            >
              {pargraph}
            </p>
          </div>
          <p
            className={`font-inter text-xs leading-6 font-medium px-4 py-[6px] text-nowrap bg-[#f6f6f6] rounded-full`}
          >
            {pageNo} of 5
          </p>
        </div>
        <div className={`h-[6px] w-full rounded-full bg-[#D5D5D5] mt-4 mb-6`}>
          <div
            style={{ width: `calc(${pageNo} * 20%)` }}
            className="h-full rounded-full bg-violetprimary"
          ></div>
        </div>

        {formSteps == "pickup-address" && (
          <Whereto
            onSubmit={() => {
              navigate("?tab=choose-your-van");
              setFormsSteps("choose-your-van");
            }}
          />
        )}

        {formSteps == "choose-your-van" ? (
          <ChooseVan
            onClick={(e) => {
              navigate("?tab=pickup-address");
              setFormsSteps("pickup-address");
            }}
            onSubmit={(e) => {
              navigate("?tab=when-moving");
              setFormsSteps("when-moving");
            }}
          />
        ) : null}

        {formSteps == "when-moving" ? (
          <When
            onClick={(e) => {
              navigate("?tab=choose-your-van");
              setFormsSteps("choose-your-van");
            }}
            onSubmit={(e) => {
              navigate("?tab=whats-moving");
              setFormsSteps("whats-moving");
            }}
          />
        ) : null}

        {formSteps === "whats-moving" ? (
          <WhatMoving
            onClick={() => {
              navigate("?tab=when-moving");
              setFormsSteps("when-moving");
            }}
            onSubmit={(e) => {
              navigate("?tab=select-helper");
              setFormsSteps("select-helper");
            }}
          />
        ) : null}
        {formSteps === "select-helper" ? (
          <AddHelper
            setHide={setHide}
            onClick={() => {
              navigate("?tab=when-moving");
              setFormsSteps("when-moving");
            }}
          />
        ) : null}
      </aside>
    </>
  );
};

export default Bookvan;
