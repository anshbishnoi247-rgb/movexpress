import React from "react";
import { ChooseVanHeading } from "../common/Heading";
import Buttonsecondary from "../common/Buttonsecondary";
import Button from "../common/Button";
import { ArrowLeft, ArrowRight } from "lucide-react";
import smallvan from "../assets/images/small-van.webp";

const ChooseVan = ({ pageNo, onClick }) => {
  return (
    <form className={`${pageNo == 2 ? "block" : "hidden"}`}>
      <ChooseVanHeading
        content="Choose Your Perfect Van"
        paragraphcontent="Select the right size for your move"
      />

      <div className="flex flex-col items-center justify-center gap-12px mt-4">
        <div className="relative overflow-hidden h-27.5 z-1 w-full shadow-sm border-slate-200 border-1 p-3 hover:border-vinegar hover:shadow-md rounded-xl transition-all duration-300 ease-in-out">
          <input
            type="radio"
            className="h-27.5 w-147 absolute opacity-0 z-10 top-0 left-0"
          />

          <div className="absolute h-6 w-6 rounded-full border-1 right-3 top-3 border-slate-200 transition-all duration-300 "></div>

          <img src={smallvan} className="h-16 w-16 object-cover" />
        </div>
      </div>

      <div className="w-full flex flex-col items-start justify-center gap-3 border-t-1 border-slate-200 pt-3 md:mt-6 md:pt-4">
        <Button
          className="w-[137px] !rounded-full !m-0"
          button="Back"
          type="button"
          onClick={onClick}
          subicon={<ArrowLeft />}
        />

        <Buttonsecondary
          type="submit"
          content="Next: Select Date & Time"
          icon={<ArrowRight size={20} />}
        />
      </div>
    </form>
  );
};

export default ChooseVan;
