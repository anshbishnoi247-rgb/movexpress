import { Check } from "lucide-react";
import { AddImage } from "../common/Icons";
import React, { useState } from "react";

const Personalinfo = () => {
  const [check, setCheck] = useState(null);
  const [imgchoosen, setImgchossen] = useState(null);
  console.log(imgchoosen);
  const handleChange = (event) => {
    setImgchossen(event.target.value);
  };

  return (
    <>
      <div className="flex flex-col gap-6 items-center justify-center w-full">
        {/* input name */}
        <div className="flex items-center justify-between gap-4 w-full">
          <div
            className={`flex flex-col gap-1 items-start justify-center w-full`}
          >
            <label
              htmlFor="firtname"
              className={`font-inter font-medium text-base leading-6 text-violet1`}
            >
              First name*
            </label>
            <input
              type="text"
              placeholder="Firstname"
              className={`outline-none p-4 border-1 rounded-lg w-full border-violet1 font-inter text-sm md:text-base max-w-79`}
            />
          </div>
          <div
            className={`flex flex-col gap-1 items-start justify-center w-full`}
          >
            <label
              htmlFor="firtname"
              className={`font-inter font-medium text-base leading-6 text-violet1`}
            >
              Surname*
            </label>
            <input
              type="text"
              placeholder="surname"
              className={`outline-none p-4 border-1 rounded-lg w-full border-violet1 font-inter text-sm md:text-base max-w-79`}
            />
          </div>
        </div>
        {/* input contact */}
        <div className="flex items-center justify-between gap-4 w-full">
          <div
            className={`flex flex-col gap-1 items-start justify-center w-full`}
          >
            <label
              htmlFor="firtname"
              className={`font-inter font-medium text-base leading-6 text-violet1`}
            >
              Phone No *
            </label>
            <input
              type="tel"
              placeholder="contact"
              className={`outline-none p-4 border-1 rounded-lg w-full border-violet1 font-inter text-sm md:text-base max-w-79`}
            />
          </div>
          <div
            className={`flex flex-col gap-1 items-start justify-center w-full`}
          >
            <label
              htmlFor="firtname"
              className={`font-inter font-medium text-base leading-6 text-violet1`}
            >
              E-mail *
            </label>
            <input
              type="e-mail"
              placeholder="e-mail"
              className={`outline-none p-4 border-1 rounded-lg w-full border-violet1 font-inter text-sm md:text-base max-w-79`}
            />
          </div>
        </div>
        {/* input dob */}
        <div className="flex items-center justify-between gap-4 w-full">
          <div
            className={`flex flex-col gap-1 items-start justify-center w-full`}
          >
            <label
              htmlFor="firtname"
              className={`font-inter font-medium text-base leading-6 text-violet1`}
            >
              Date of Birth *
            </label>
            <input
              type="date"
              placeholder="name"
              className={`outline-none p-4 border-1 rounded-lg w-full border-violet1 font-inter text-sm md:text-base max-w-79`}
            />
          </div>
          <div
            className={`flex flex-col gap-1 items-start justify-center w-full`}
          >
            <label
              htmlFor="firtname"
              className={`font-inter font-medium text-base leading-6 text-violet1`}
            >
              Language of preference in english *
            </label>
            <input
              type="text"
              placeholder="name"
              className={`outline-none p-4 border-1 rounded-lg w-full border-violet1 font-inter text-sm md:text-base max-w-79`}
            />
          </div>
        </div>
        {/* input adreess */}
        <div className="flex items-center justify-between gap-4 w-full">
          <div
            className={`flex flex-col gap-1 items-start justify-center w-full`}
          >
            <label
              htmlFor="firtname"
              className={`font-inter font-medium text-base leading-6 text-violet1`}
            >
              Address *
            </label>
            <input
              type="text"
              placeholder="address"
              className={`outline-none p-4 border-1 rounded-lg w-full border-violet1 font-inter text-sm md:text-base max-w-79`}
            />
          </div>
          <div
            className={`flex flex-col gap-1 items-start justify-center w-full`}
          >
            <label
              htmlFor="firtname"
              className={`font-inter font-medium text-base leading-6 text-violet1`}
            >
              Postcode *
            </label>
            <input
              type="number"
              placeholder="Postcode"
              className={`outline-none p-4 border-1 rounded-lg w-full border-violet1 font-inter text-sm md:text-base max-w-79`}
            />
          </div>
        </div>

        {/* checkbox */}
        <div className="flex flex-col items-start gap-3 justify-center w-full">
          <label
            htmlFor="firstname"
            className="font-inter font-medium text-base leading-6 text-violet1"
          >
            Do you have any previous criminal convictions? *
          </label>

          <div className="flex items-center justify-center gap-6">
            {/* YES Option */}
            <div className="flex items-center gap-2 justify-center relative">
              <span
                className={`relative h-6 w-6 border hover:bg-violet1 ${
                  check === "yes" ? "bg-violet1" : ""
                } rounded-lg cursor-pointer`}
                onClick={() => setCheck("yes")}
              >
                <input
                  className="h-full w-full absolute opacity-0"
                  type="radio"
                  name="criminal"
                  value="yes"
                />
                {check === "yes" && (
                  <Check
                    size={20}
                    className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 absolute text-white"
                  />
                )}
              </span>
              <label className="font-inter font-medium text-base leading-6 text-violet1">
                Yes
              </label>
            </div>

            {/* NO Option */}
            <div className="flex items-center gap-2 justify-center relative">
              <span
                className={`relative h-6 w-6 border hover:bg-violet1 ${
                  check === "no" ? "bg-violet1" : ""
                } rounded-lg cursor-pointer`}
                onClick={() => setCheck("no")}
              >
                <input
                  className="h-full w-full absolute opacity-0"
                  type="radio"
                  name="criminal"
                  value="no"
                />
                {check === "no" && (
                  <Check
                    size={20}
                    className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 absolute text-white"
                  />
                )}
              </span>
              <label className="font-inter font-medium text-base leading-6 text-violet1">
                No
              </label>
            </div>
          </div>
        </div>

        <div className="w-full flex flex-col gap-2 items-start justify-center">
          <label
            htmlFor="firstname"
            className="font-inter font-medium text-base leading-6 text-violet1"
          >
            Photo of your selfie *
          </label>

          <article className="flex items-center justify-center relative border-1 border-dashed border-violet1 rounded-xl h-[187px] w-full">
            <input
              type="file"
              value={imgchoosen}
              onChange={handleChange}
              className="absolute top-0 left-0 z-2 w-full h-full opacity-0"
            />

            <img src={imgchoosen} />

            <article className="z-1  w-fit flex items-center justify-center flex-col">
              <AddImage />
              <p className="font-inter mt-2 md:mt-3 mb-1 font-medium text-sm leading-6 text-violet1">
                Click to Upload Front Side of Card
              </p>

              <p className="font-inter font-normal text-sm leading-[164%] text-[#D9DBDC]">
                {" "}
                (Max. File size: 25 MB)
              </p>
            </article>
          </article>
        </div>
      </div>
    </>
  );
};

export default Personalinfo;
