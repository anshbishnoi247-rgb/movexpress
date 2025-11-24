import { useState } from "react";
import { ChooseVanHeading } from "../common/Heading";
import Button from "../common/Button";
import Buttonsecondary from "../common/Buttonsecondary";
import { ArrowLeft, ArrowRight, Box, Camera, Truck } from "lucide-react";
import Fillavan from "./Fillavan";
import TakePicture from "./TakePicture";

const WhatMoving = ({ onSubmit, onClick }) => {
  const [fillvan, setFillVan] = useState(false);
  const [additems, setAddItems] = useState(false);
  const [camera, setCamera] = useState(false);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit(e);
      }}
    >
      <ChooseVanHeading
        content="What are you moving?"
        paragraphcontent="Choose your moving approach"
      />

      <div className="max-w-[544px] m-auto  grid my-4 grid-cols-2 gap-2 ">
        <div
          onClick={() => {
            setFillVan(true);
            setAddItems(false);
            setCamera(false);
          }}
          className={` ${
            fillvan
              ? "bg-violetprimary text-white"
              : " hover:border-violetprimary hover:bg-violetprimary/5 "
          } whatsmovingbtn border-black/20`}
        >
          <Truck className="m-auto " size={20} />
          <p>Fill a Van </p>
        </div>
        <div
          onClick={() => {
            setAddItems(true);
            setFillVan(false);
            setCamera(false);
          }}
          className={` ${
            additems
              ? "bg-violetprimary text-white"
              : " hover:border-violetprimary hover:bg-violetprimary/5 "
          } 
            whatsmovingbtn border-black/20`}
        >
          <Box className="m-auto " size={20} />
          <p>Add items </p>
        </div>
        <div
          onClick={() => {
            setCamera(true);
            setAddItems(false);
            setFillVan(false);
          }}
          className={` ${
            camera
              ? "bg-violetprimary text-white"
              : " hover:border-violetprimary hover:bg-violetprimary/5 "
          } whatsmovingbtn border-black/20 col-span-2`}
        >
          <Camera className="m-auto" size={20} />
          <p>Take Picture/Video</p>
        </div>
      </div>
      {fillvan && <Fillavan />}
      {camera && <TakePicture />}

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
          content="Next: Select Helper"
          icon={<ArrowRight size={20} />}
        />
      </div>
    </form>
  );
};

export default WhatMoving;
