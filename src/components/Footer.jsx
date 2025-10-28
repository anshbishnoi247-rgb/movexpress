import React from "react";
import Subfooter from "./Subfooter";

import Logopamplate from "../common/Logopamplate";

const Footer = () => {
  return (
    <footer className="pt-[130px] bg-mist">
      <div
        className={`flex flex-col items-center max-w-[1319px] gap-[130px] mx-auto p-5`}
      >
        <div className={``}>
          <Logopamplate
            className={`!text-[43px]`}
            classNameImg={`!max-w-[95px]`}
            classNameParagraph={`!leading-[160%] !text-[21px]`}
          />
        </div>
        <Subfooter />
      </div>
    </footer>
  );
};

export default Footer;
