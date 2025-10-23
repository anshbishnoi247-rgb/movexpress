import React from "react";
import { X } from "lucide-react";
import Logo from "../assets/images/favicon.webp";
import { Bookmarks } from "../common/helper";
import { useState } from "react";

const Slidernav = ({ slidernav, setslidernav }) => {
  const [Active, setActive] = useState("Home");

  return (
    <div
      className={` ${
        slidernav ? "translate-y-0" : "-translate-y-full"
      } bg-mist w-full h-full transition-all duration-300 linear absolute flex flex-col`}
    >
      <div
        className={`flex items-center justify-between p-4 w-full max-w-332 mx-auto `}
      >
        <div className={`flex items-center justify-center gap-2`}>
          <img src={Logo} alt="logo" className={`max-w-[70px]`} />
          <div className={`flex flex-col items-start justify-center`}>
            <h1
              className={`font-figtree font-extrabold leading-[120%] italic text-violet1 text-[32px]`}
            >
              MOVEXPRESS
            </h1>
            <p
              className={`font-figtree font-medium text-base italic leading-[120%] text-violet1/80`}
            >
              Expressly Delivered
            </p>
          </div>
        </div>
        <button
          onClick={() => setslidernav(false)}
          className={`bg-violet1 p-2 hover:opacity-80 h-fit rounded-lg md:rounded-xl transition-all duration-300 linear`}
        >
          <X className={`text-mist `} size={40} />
        </button>
      </div>

      <ul className={`flex items-center justify-center w-full flex-col grow`}>
        {Bookmarks.map((obj, i) => {
          return (
            <li>
              <a
                key={i}
                href="#"
                onClick={() => setActive(obj.name)}
                className={`${
                  Active === obj.name
                    ? "italic underline !font-bricolage cursor-default"
                    : " hover:text-vinegar"
                } font-figtree font-medium leading-[150%] text-3xl md:text-5xl lg:text-[64px] text-violet1`}
              >
                {obj.name}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Slidernav;
