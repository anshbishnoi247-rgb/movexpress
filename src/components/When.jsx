import React, { useState } from "react";
import {
  ChooseVanHeading,
  EstimationParagraph,
  HeadingTime,
  LabelSecondary,
  SubTimeParagraph,
  TimeParagraph,
  TotalTimePargraph,
} from "../common/Heading";
import { Clock, Package, Truck } from "lucide-react";
import { timelist } from "../common/Helper";

const When = ({ pageNo }) => {
  const [choosedVan, setchoosedVan] = useState(
    localStorage.getItem("choosedvan")
  );
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit(e);
      }}
      className={`${pageNo == 3 ? "block" : "hidden"}`}
    >
      <ChooseVanHeading
        content="When do you need us?"
        paragraphcontent="Select your preferred date and time for your move"
      />
      <div className="p-6 flex flex-col items-start justify-center shadow-sm border border-solitude rounded-2xl mt-6">
        <div className="flex items-center justify-start gap-2 mb-4">
          <div className="p-1.5 bg-violetprimary/10 w-fit rounded-lg">
            <Truck size={20} className="text-violetprimary" />
          </div>

          <HeadingTime
            heading={`${
              choosedVan === "smallvan"
                ? "Small Van"
                : choosedVan === "mediumvan"
                ? "Medium Van"
                : choosedVan === "largevan"
                ? "Large Van"
                : choosedVan === "lutonvan"
                ? "Luton Van"
                : choosedVan === "lutonboxvan"
                ? "Luton Box Van"
                : ""
            }- Time Estimation`}
          />
        </div>
        <div className="flex flex-col items-center justify-center w-full">
          {timelist.map((obj, index) => {
            return (
              <div
                key={index}
                class="py-2 px-3 flex justify-between w-full items-center"
              >
                <div className="flex items-center justify-center gap-1.5">
                  {obj.svg}
                  <SubTimeParagraph content={obj.head} />
                </div>
                <TimeParagraph content={obj.para} className="text-sm" />
              </div>
            );
          })}
        </div>
        <div className="bg-violetprimary flex items-center justify-between rounded-lg mt-3 py-3 px-4 w-full">
          <TotalTimePargraph
            className="text-sm"
            content="Estimated Toatl Time:"
          />
          <TotalTimePargraph className="text-lg" content="4h 26m" />
        </div>
        <EstimationParagraph content="Based on asmall van, we estimate it will take 4h 26m to complete your move. Please adjust this to reflect the exact time you need to load and unload." />
      </div>

      <div className="bg-white p-5 border-1 border-solitude rounded-2xl shadow-sm mt-6">
        <div className="flex items-center justify-start gap-2 mb-3">
          <div className="p-1.5 bg-vinegar/10 w-fit rounded-lg">
            <Package size={16} className="text-vinegar" />
          </div>

          <HeadingTime
            className="!text-base"
            heading="Loading & Unloading Time"
          />
        </div>

        <LabelSecondary label="How much time do you need to load and unload?" />
      </div>
    </form>
  );
};

export default When;
