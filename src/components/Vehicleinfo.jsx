import { ArrowRight, Check } from "lucide-react";
import { useState } from "react";
import Button from "../common/Button";
import { LabelHeading } from "../common/Heading";
import { AddImage } from "../common/Icons";

const Vehicleinfo = ({ filled, setFilled }) => {
  const [agree, setAgree] = useState(false);

  const [vehicletype, setVehicletype] = useState(null);
  const [registration, setRegistration] = useState(null);
  const [frontdrivinglicense, setFrontDrivingLicense] = useState(null);
  const [backdrivinglicense, setBackDrivingLicense] = useState(null);
  const [frontinsurancecopy, setFrontInsuranceCopy] = useState(null);
  const [insurancestartdate, setInsuranceStartDate] = useState(null);
  const [insuranceenddate, setInsuranceEndDate] = useState(null);
  const [transitinsurance, setTransitInsurance] = useState(null);
  const [transitinsurancestartdate, setTransitInsuranceStartDate] =
    useState(null);
  const [transitinsuranceenddate, setTransitInsuranceEndDate] = useState(null);
  const [liabilityinsurance, setLiablityInsurance] = useState(null);
  const [liabiltyinsurancestartdate, setLiabilityInsuranceStartDate] =
    useState(null);
  const [liabilityinsuranceenddate, setLiabilityInsuranceEndDate] =
    useState(null);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setFilled(true);
      }}
      className="flex flex-col gap-6 items-start justify-center w-full"
    >
      {/* vehicle type */}
      <aritcle className="flex flex-col md:flex-row items-center justify-between gap-4 w-full">
        <div
          className={`flex flex-col gap-1 items-start justify-center w-full`}
        >
          <label htmlFor="firtname" className="label-style">
            Vehicle type *
          </label>
          <select
            required
            type="text"
            value={vehicletype}
            onChange={(e) => setVehicletype(e.target.value)}
            placeholder="Select Vehicle type "
            className="input-style-common"
          >
            <option>car</option>
            <option>Trolly</option>
            <option>Truck</option>
          </select>
        </div>
        <div
          className={`flex flex-col gap-1 items-start justify-center w-full`}
        >
          <label htmlFor="firtname" className="label-style">
            Vehicle registration no *
          </label>
          <input
            required
            type="number"
            value={registration}
            onChange={(e) => setRegistration(e.target.value)}
            placeholder="Enter vehicle registration no"
            className="input-style-common"
          />
        </div>
      </aritcle>

      {/* add license */}
      <article className="flex flex-col md:flex-row items-center justify-between gap-4 w-full">
        <article className="w-full flex flex-col gap-2 items-start justify-center">
          <label htmlFor="firstname" className="label-style">
            Van Insurance Copy *
          </label>
          <article className="flex items-center justify-center relative border-1 border-dashed border-violetprimary rounded-xl h-[124px] w-full">
            <input
              type="file"
              required
              value={frontdrivinglicense}
              onChange={(e) => setFrontDrivingLicense(e.target.value)}
              className="absolute top-0 left-0 z-2 w-full h-full opacity-0"
            />
            <img />
            <article className="z-1 w-fit flex items-center justify-center flex-col">
              <AddImage />
              <p className="font-inter mt-2 md:mt-3 mb-1 font-medium text-sm leading-6 text-violetprimary">
                Click to Upload Front Side of Card
              </p>
              <p className="font-inter font-normal text-sm leading-[164%] text-[#D9DBDC]">
                {" "}
                (Max. File size: 25 MB)
              </p>
            </article>
          </article>
        </article>

        <article className="w-full flex flex-col gap-2 items-start justify-center">
          <label htmlFor="firstname" className="label-style">
            Back Of Driving Licence *
          </label>
          <article className="flex items-center justify-center relative border-1 border-dashed border-violetprimary rounded-xl h-[124px] w-full">
            <input
              type="file"
              required
              value={backdrivinglicense}
              onChange={(e) => setBackDrivingLicense(e.target.value)}
              className="absolute top-0 left-0 z-2 w-full h-full opacity-0"
            />
            <img />
            <article className="z-1  w-fit flex items-center justify-center flex-col">
              <AddImage />
              <p className="font-inter mt-2 md:mt-3 mb-1 font-medium text-sm leading-6 text-violetprimary">
                Click to Upload Back Side of Card
              </p>
              <p className="font-inter font-normal text-sm leading-[164%] text-[#D9DBDC]">
                {" "}
                (Max. File size: 25 MB)
              </p>
            </article>
          </article>
        </article>
      </article>

      {/* van insurance */}
      <article className="flex flex-col items-center gap-5 justify-center w-full">
        <article className="flex items-center justify-center w-full">
          <div className="border-1 border-violetprimary w-full"></div>
          <LabelHeading content="Van Service" />
          <div className="border-1 border-violetprimary w-full"></div>
        </article>

        <article className="w-full flex flex-col gap-2 items-start justify-center">
          <label htmlFor="firstname" className="label-style">
            Front Of Driving Licence *
          </label>

          <article className="flex items-center justify-center relative border-1 border-dashed border-violetprimary rounded-xl h-[124px] w-full">
            <input
              type="file"
              value={frontinsurancecopy}
              onChange={(e) => setFrontInsuranceCopy(e.target.value)}
              required
              className="absolute top-0 left-0 z-2 w-full h-full opacity-0"
            />
            <img />
            <article className="z-1 w-fit flex items-center justify-center flex-col">
              <AddImage />
              <p className="font-inter mt-2 md:mt-3 mb-1 font-medium text-sm leading-6 text-violetprimary">
                Click to Upload Front Side of Card
              </p>
              <p className="font-inter font-normal text-sm leading-[164%] text-[#D9DBDC]">
                {" "}
                (Max. File size: 25 MB)
              </p>
            </article>
          </article>
        </article>

        <aritcle className="flex flex-col md:flex-row items-center justify-between gap-4 w-full">
          <div
            className={`flex flex-col gap-1 items-start justify-center w-full`}
          >
            <label
              htmlFor="firtname"
              className={`font-inter font-medium text-base leading-6 text-violetprimary`}
            >
              Start Date *
            </label>
            <input
              required
              type="date"
              value={insurancestartdate}
              onChange={(e) => setInsuranceStartDate(e.target.value)}
              placeholder="Enter vehicle registration no"
              className="input-style-common"
            />
          </div>
          <div
            className={`flex flex-col gap-1 items-start justify-center w-full`}
          >
            <label
              htmlFor="firtname"
              className={`font-inter font-medium text-base leading-6 text-violetprimary`}
            >
              End Date *
            </label>
            <input
              required
              type="date"
              value={insuranceenddate}
              onChange={(e) => setInsuranceEndDate(e.target.value)}
              placeholder="Enter vehicle registration no"
              className={`outline-none p-4 border-1 rounded-lg w-full border-violetprimary font-inter text-sm md:text-base max-w-79`}
            />
          </div>
        </aritcle>
      </article>

      {/* Transit insurance */}
      <article className="flex flex-col items-center gap-5 justify-center w-full">
        <article className="flex items-center justify-center w-full">
          <div className="border-1 border-violetprimary w-full"></div>
          <LabelHeading content="Goods In Transit Insurance" />
          <div className="border-1 border-violetprimary w-full"></div>
        </article>

        <article className="w-full flex flex-col gap-2 items-start justify-center">
          <label htmlFor="firstname" className="label-style">
            Goods In Transit Insurance Copy *
          </label>

          <article className="flex items-center justify-center relative border-1 border-dashed border-violetprimary rounded-xl h-[124px] w-full">
            <input
              type="file"
              required
              value={transitinsurance}
              onChange={(e) => setTransitInsurance(e.target.value)}
              className="absolute top-0 left-0 z-2 w-full h-full opacity-0"
            />
            <img />
            <article className="z-1 w-fit flex items-center justify-center flex-col">
              <AddImage />
              <p className="font-inter mt-2 md:mt-3 mb-1 font-medium text-sm leading-6 text-violetprimary">
                Click to Upload Front Side of Card
              </p>
              <p className="font-inter font-normal text-sm leading-[164%] text-[#D9DBDC]">
                {" "}
                (Max. File size: 25 MB)
              </p>
            </article>
          </article>
        </article>

        <aritcle className="flex flex-col md:flex-row items-center justify-between gap-4 w-full">
          <div
            className={`flex flex-col gap-1 items-start justify-center w-full`}
          >
            <label htmlFor="firtname" className="label-style">
              Start Date *
            </label>
            <input
              required
              type="date"
              value={transitinsurancestartdate}
              onChange={(e) => setTransitInsuranceStartDate(e.target.value)}
              placeholder="Enter vehicle registration no"
              className="input-style-common"
            />
          </div>
          <div
            className={`flex flex-col gap-1 items-start justify-center w-full`}
          >
            <label
              htmlFor="firtname"
              className={`font-inter font-medium text-base leading-6 text-violetprimary`}
            >
              End Date *
            </label>
            <input
              required
              type="date"
              value={transitinsuranceenddate}
              onChange={(e) => setTransitInsuranceEndDate(e.target.value)}
              placeholder="Enter vehicle registration no"
              className="input-style-common"
            />
          </div>
        </aritcle>
      </article>

      {/* liability insurance */}
      <article className="flex flex-col items-center gap-5 justify-center w-full">
        <article className="flex items-center justify-center w-full">
          <div className="border-1 border-violetprimary w-full"></div>
          <LabelHeading content="Public Liability Insurance" />
          <div className="border-1 border-violetprimary w-full"></div>
        </article>

        <article className="w-full flex flex-col gap-2 items-start justify-center">
          <label
            htmlFor="firstname"
            className="font-inter font-medium text-base leading-6 text-violetprimary"
          >
            Public Liability Insurance Copy *
          </label>
          <article className="flex items-center justify-center relative border-1 border-dashed border-violetprimary rounded-xl h-[124px] w-full">
            <input
              type="file"
              value={liabilityinsurance}
              onChange={(e) => setLiablityInsurance(e.target.value)}
              required
              className="absolute top-0 left-0 z-2 w-full h-full opacity-0"
            />
            <img />
            <article className="z-1 w-fit flex items-center justify-center flex-col">
              <AddImage />
              <p className="font-inter mt-2 md:mt-3 mb-1 font-medium text-sm leading-6 text-violetprimary">
                Click to Upload Front Side of Card
              </p>
              <p className="font-inter font-normal text-sm leading-[164%] text-[#D9DBDC]">
                {" "}
                (Max. File size: 25 MB)
              </p>
            </article>
          </article>
        </article>

        <aritcle className="flex flex-col md:flex-row items-center justify-between gap-4 w-full">
          <div
            className={`flex flex-col gap-1 items-start justify-center w-full`}
          >
            <label
              htmlFor="firtname"
              className={`font-inter font-medium text-base leading-6 text-violetprimary`}
            >
              Start Date *
            </label>
            <input
              required
              type="date"
              value={liabiltyinsurancestartdate}
              onChange={(e) => setLiabilityInsuranceStartDate(e.target.value)}
              placeholder="Enter vehicle registration no"
              className={`outline-none p-4 border-1 rounded-lg w-full border-violetprimary font-inter text-sm md:text-base max-w-79`}
            />
          </div>
          <div
            className={`flex flex-col gap-1 items-start justify-center w-full`}
          >
            <label
              htmlFor="firtname"
              className={`font-inter font-medium text-base leading-6 text-violetprimary`}
            >
              End Date *
            </label>
            <input
              required
              type="date"
              value={liabilityinsuranceenddate}
              onChange={(e) => setLiabilityInsuranceEndDate(e.target.value)}
              placeholder="Enter vehicle registration no"
              className={`outline-none p-4 border-1 rounded-lg w-full border-violetprimary font-inter text-sm md:text-base max-w-79`}
            />
          </div>
        </aritcle>
      </article>

      {/* checkbox */}
      <article className="flex items-start gap-2 justify-center w-full">
        <div
          onClick={() => setAgree(!agree)}
          className={`w-5 h-5 relative ${
            agree && "bg-violetprimary"
          } border-1 border-midgray rounded-sm overflow-hidden`}
        >
          <input
            type="checkbox"
            value="agree"
            className="h-full w-full opacity-0 "
          />
          <Check className="absolute top-1/2 left-1/2 -translate-1/2 text-white h-4 w-4" />
        </div>
        <label className="font-inter text-sm leading-5 text-violetprimary/48">
          By clicking the submit button, I agree that I have read{" "}
          <br className="sm:hidden" />
          and understood the{" "}
          <span className="font-semibold">Terms And Conditions</span>
        </label>
      </article>

      <Button
        button="Submit Application"
        subclassName="!w-[230px]"
        className="md:!mx-0 mt-2"
        icon={<ArrowRight className="button-sign-up-style" />}
      />
    </form>
  );
};

export default Vehicleinfo;
