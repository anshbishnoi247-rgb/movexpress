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
  const [searchParams, setSearchParams] = useSearchParams();
  const params = searchParams.get("tabname");

  const [tabName, setTabName] = useState("/");

  return (
    <aside
      className={`w-full py-6 px-7 bg-white z-5 relative rounded-3xl mb-2 `}
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
          className={`font-inter text-xs leading-6 font-medium px-4 py-[6px] bg-[#f6f6f6] rounded-full`}
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

      {pageNo == 1 ? (
        <Whereto
          onSubmit={(e) => {
            navigate("Choosevan");
            setPageNo((prev) => prev + 1),
              setHeading("Choose Your Van"),
              setPargraph("Select your perfect vehicle");
          }}
        />
      ) : null}

      {pageNo == 2 ? (
        <ChooseVan
          onClick={(e) => {
            navigate("/");
            setPageNo((prev) => prev - 1);
            setHeading("Choose Your Van"),
              setPargraph("Select your perfect vehicle");
          }}
          onSubmit={(e) => {
            navigate("When");
            setPageNo((prev) => prev + 1),
              setHeading("When?"),
              setPargraph("Pick your preferred date and time");
          }}
        />
      ) : null}

      {pageNo == 3 ? (
        <When
          onClick={(e) => {
            setPageNo((prev) => prev - 1);
            setHeading("When?"),
              setPargraph("Pick your preferred date and time");
          }}
          onSubmit={(e) => {
            setPageNo((prev) => prev + 1),
              setHeading("What are you moving?"),
              setPargraph("Choose your moving approach");
          }}
        />
      ) : null}

      {pageNo === 4 ? (
        <WhatMoving
          onClick={() => {
            setPageNo((prev) => prev - 1);
            setHeading("What are you moving?");
            setPargraph("Choose your moving approach");
          }}
        />
      ) : null}
    </aside>
  );
};

export default Bookvan;
