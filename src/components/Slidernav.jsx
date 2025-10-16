import React from "react";
import { CloseIcon } from "../common/Icons";

const Slidernav = ({ slidernav, setslidernav }) => {
  return (
    <div
      className={` ${
        slidernav ? "translate-x-0" : "translate-x-full"
      } bg-violet1 w-fit h-full right-0 rounded-l-3xl border-3 transition-all duration-300 linear  border-l-lightpink border-t-lightpink border-b-lightpink absolute p-5`}
    >
      <button
        onClick={() => setslidernav(false)}
        className={`absolute top-5 right-5`}
      >
        <CloseIcon />
      </button>

      <ul className={`flex item-centewr justify-center flex-col gap-5`}>
        <li>
          <a
            href="#"
            className={`font-inter font-medium text-3xl text-white/80 leading-[150%]`}
          >
            Home
          </a>
        </li>
        <li>
          <a
            href="#"
            className={`font-inter font-medium text-3xl text-white/80 leading-[150%]`}
          >
            About
          </a>
        </li>
        <li>
          <a
            href="#"
            className={`font-inter font-medium text-3xl text-white/80 leading-[150%]`}
          >
            Service
          </a>
        </li>
        <li>
          <a
            href="#"
            className={`font-inter font-medium text-3xl text-white/80 leading-[150%]`}
          >
            Become a Driver
          </a>
        </li>
        <li>
          <a
            href="#"
            className={`font-inter font-medium text-3xl text-white/80 leading-[150%]`}
          >
            Blog
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Slidernav;
