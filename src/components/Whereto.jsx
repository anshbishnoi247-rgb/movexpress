import React, { useState } from "react";
import { Alert, Gps } from "../common/Icons";
import map from "../assets/images/map.webp";
import Buttonsecondary from "../common/Buttonsecondary";

const Whereto = ({ onSubmit, pageNo }) => {
  const [startDestination, setstartDestination] = useState("");
  const [finalDestination, setfinalDestination] = useState("");
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit(e);
      }}
      className={`${pageNo == 1 ? "block" : "hidden"}`}
    >
      <div className={`mb-5 md:mb-[33px]`}>
        <label
          className={`font-semibold text-sm sm:font-base leading-6 font-inter`}
        >
          Pickup Address
        </label>
        <div
          className={`flex items-center border-1 h-12 md:h-15 px-4 mt-1 border-[#EEEFF3] justify-center gap-3 rounded-xl`}
        >
          <Gps />
          <input
            onChange={(e) => {
              setstartDestination(e.target.value),
                console.log(startDestination);
            }}
            value={startDestination}
            type="text"
            required
            className={`w-full outline-none`}
            placeholder="Enter pickup address"
          />
        </div>
      </div>
      <div className={`mb-5 md:mb-[33px]`}>
        <label
          className={`font-semibold text-sm sm:font-base leading-6 font-inter`}
        >
          Destination Address
        </label>
        <div
          className={`flex items-center border-1 h-12 md:h-15 mt-1 px-4 border-[#EEEFF3] justify-center gap-3 rounded-xl`}
        >
          <Gps />
          <input
            onChange={(e) => {
              setfinalDestination(e.target.value),
                console.log(finalDestination);
            }}
            value={finalDestination}
            required
            type="text"
            className={`w-full outline-none`}
            placeholder="Enter destination address"
          />
        </div>
      </div>

      <img
        src={map}
        alt="map"
        className={`h-[100px] md:h-[179px] w-full object-cover rounded-lg`}
      />
      <div
        className={`w-full p-3 bg-daygreen my-3 md:mb-8 md:mt-3 flex gap-2 items-center rounded-lg`}
      >
        <Alert />
        <div className={`grow-1 flex  flex-col items-start justify-center`}>
          <p
            className={`font-semibold leading-[18px] font-inter text-midgreen text-xs`}
          >
            Distance
          </p>
          <p className={`leading-[18px] font-inter text-midgreen text-xs`}>
            Between pickup and destination
          </p>
        </div>
        <p
          className={`font-semibold leading-[18px] font-inter text-midgreen text-sm`}
        >
          1<span className="text-[10px]">miles</span>
        </p>
      </div>
      <Buttonsecondary type="submit" content="Show Quote" />
    </form>
  );
};

export default Whereto;
