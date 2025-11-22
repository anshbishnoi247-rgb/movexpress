import { useState } from "react";
import { ChooseVanHeading } from "../common/Heading";
import Button from "../common/Button";
import Buttonsecondary from "../common/Buttonsecondary";
import { ArrowLeft, ArrowRight } from "lucide-react";

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

      <div className="grid grid-cols-2 gap-2 mb-4">
        <button className=""></button>
        <button className=""></button>
        <button className=""></button>
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
          content="Next: Select Helper"
          icon={<ArrowRight size={20} />}
        />
      </div>
    </form>
  );
};

export default WhatMoving;
