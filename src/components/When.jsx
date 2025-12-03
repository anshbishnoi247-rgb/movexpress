import {
  ArrowLeft,
  ArrowRight,
  Calendar,
  Package,
  Play,
  Triangle,
  Truck,
} from "lucide-react";
import { useContext, useState } from "react";
import {
  ChooseVanHeading,
  EstimationParagraph,
  HeadingTime,
  LabelSecondary,
  PlacholderParagraph,
  SubTimeParagraph,
  TimeParagraph,
  TotalTimePargraph,
} from "../common/Heading";
import { timelist } from "../common/Helper";
import Button from "../common/Button";
import Buttonsecondary from "../common/Buttonsecondary";
import { InformationContext } from "../context/context";

const When = ({ pageNo, onClick, onSubmit }) => {
  const [inputActive, setInputActive] = useState(false);
  const [inputActiveSecondary, setInputActiveSecondary] = useState(false);
  const {loadingunloadingTime, setLoadingUnloadingTime} =
    useContext(InformationContext);
  const {startDate, setStartDate} = useContext(InformationContext);
  const {startTime, setStartTime} = useContext(InformationContext);
  const { choosedvan, setChoosedVan } = useContext(InformationContext);
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit(e);
      }}
    >
      <ChooseVanHeading
        content="When do you need us?"
        paragraphcontent="Select your preferred date and time for your move"
      />
      <div className="common-style-partition">
        <div className="flex items-center justify-start gap-2 mb-4">
          <div className="p-1.5 bg-violetprimary/10 w-fit rounded-lg">
            <Truck size={20} className="text-violetprimary" />
          </div>

          <HeadingTime
            heading={`${
              choosedvan === "Small Van"
                ? "Small Van"
                : choosedvan === "Medium Van"
                ? "Medium Van"
                : choosedvan === "Large Van"
                ? "Large Van"
                : choosedvan === "Luton Van"
                ? "Luton Van"
                : choosedvan === "Luton Box Van"
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
                className="py-2 px-3 flex justify-between w-full items-center"
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

      <div className="common-style-partition">
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
        <div className="flex items-center justify-between relative input-style-primary">
          <PlacholderParagraph
            content="Select How much time"
            className={loadingunloadingTime ? "opacity-0" : "opacity-100"}
          />
          <Triangle
            size={16}
            fill={" #4b014b"}
            className={`transition-all duration-300 ease-linear  ${
              inputActive ? "!rotate-0" : "rotate-180"
            }`}
          />
          <select
            onChange={(e) => setLoadingUnloadingTime(e.target.value)}
            required
            onClick={() => setInputActive(!inputActive)}
            onBlur={() => setInputActive(false)}
            className={`outline-none w-[97%] h-full absolute ${
              loadingunloadingTime ? "opacity-100" : "opacity-0"
            } px-3 left-0 text-violetprimary/50 top-0`}
          >
            <option>10h</option>
            <option>20h</option>
            <option>30h</option>
          </select>
        </div>
      </div>
      <div className="common-style-partition">
        <div className="flex items-center justify-start gap-2 mb-3">
          <div className="p-1.5 bg-violetprimary/10 w-fit rounded-lg">
            <Calendar size={16} className="text-violetprimary" />
          </div>

          <HeadingTime className="!text-base" heading="Select Date & Time" />
        </div>
        <div className="flex flex-col items-center justify-center gap-4 w-full">
          <div className="flex flex-col group items-start justify-center w-full">
            <LabelSecondary label="Choose your moving date" />
            <div className="input-style-primary relative">
              <PlacholderParagraph
                content="Select How much time"
                className={` ${
                  startDate ? "opacity-0" : "opacity-100"
                } group-hover:opacity-0 transition-all duration-300 ease-linear `}
              />
              <input
                onChange={(e) => setStartDate(e.target.value)}
                required
                type="date"
                className={`${
                  startDate ? "opacity-100" : "opacity-0"
                } w-full h-full z-3 text-violetprimary/50 absolute group-hover:opacity-100 transition-all duration-300 ease-linear top-0 left-0 px-3 outline-none `}
              />
            </div>
          </div>

          <div className="flex flex-col items-start justify-center w-full">
            <LabelSecondary label="Preferred start time" />
            <div className="flex items-center justify-between relative input-style-primary">
              <PlacholderParagraph
                content="Select How much time"
                className={startTime ? "opacity-0" : "opacity-100"}
              />
              <Triangle
                size={16}
                fill={" #4b014b"}
                className={`transition-all duration-300 ease-linear  ${
                  inputActiveSecondary ? "!rotate-0" : "rotate-180"
                }`}
              />
              <select
                onChange={(e) => setStartTime(e.target.value)}
                required
                onClick={() => setInputActiveSecondary(!inputActiveSecondary)}
                onBlur={() => setInputActiveSecondary(false)}
                className={`${
                  startTime ? "opacity-100" : "opacity-0"
                } outline-none w-[97%] h-full absolute px-3 left-0 text-violetprimary/50 top-0`}
              >
                <option>08:00</option>
                <option>08:30</option>
                <option>09:00</option>
                <option>09:30</option>
                <option>10:00</option>
                <option>10:30</option>
              </select>
            </div>
          </div>
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
          content="Next: Select Items"
          icon={<ArrowRight size={20} />}
        />
      </div>
    </form>
  );
};

export default When;
