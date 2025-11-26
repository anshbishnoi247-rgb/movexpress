import { useEffect, useState } from "react";

import Whereto from "./Whereto";
import ChooseVan from "./ChooseVan";
import When from "./When";
import WhatMoving from "./WhatMoving";
import { useNavigate, useSearchParams } from "react-router";

const Bookvan = () => {
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
    } else if (params == "when-moving") {
      setPageNo(3);
    } else if (params == "whats-moving") {
      setPageNo(4);
    } else {
      setPageNo(1);
    }
  }, [params]);

  return (
    <aside
      className={`w-full lg:py-6 p-4 lg:px-7 bg-white z-5 relative rounded-3xl mb-2 `}
    >
      <div className={`flex items-center justify-between`}>
        <div className={`flex flex-col items-start justify-center`}>
          <h2
            className={`font-semibold font-figtree text-midnight text-2xl md:text-3xl lg:text-[32px] leading-[140%]`}
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

            setHeading("Choose Your Van");
            setPargraph("Select your perfect vehicle");
          }}
        />
      )}

      {formSteps == "choose-your-van" ? (
        <ChooseVan
          onClick={(e) => {
            navigate("?tab=pickup-address");
            setFormsSteps("pickup-address");

            setHeading("Choose Your Van"),
              setPargraph("Select your perfect vehicle");
          }}
          onSubmit={(e) => {
            navigate("?tab=when-moving");
            setFormsSteps("when-moving");

            setHeading("When?"),
              setPargraph("Pick your preferred date and time");
          }}
        />
      ) : null}

      {formSteps == "when-moving" ? (
        <When
          onClick={(e) => {
            navigate("?tab=choose-your-van");
            setFormsSteps("choose-your-van");

            setHeading("When?"),
              setPargraph("Pick your preferred date and time");
          }}
          onSubmit={(e) => {
            navigate("?tab=whats-moving");

            setHeading("What are you moving?"),
              setPargraph("Choose your moving approach");
          }}
        />
      ) : null}

      {formSteps === "whats-moving" ? (
        <WhatMoving
          onClick={() => {
            navigate("?tab=when-moving");
            setFormsSteps("when-moving");

            setHeading("What are you moving?");
            setPargraph("Choose your moving approach");
          }}
        />
      ) : null}
    </aside>
  );
};

export default Bookvan;
