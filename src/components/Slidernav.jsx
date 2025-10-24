import { X } from "lucide-react";
import Logo from "../assets/images/favicon.webp";
import { navlist } from "../common/Helper";
import { useState } from "react";
import { useLocation, useParams } from "react-router";

const Slidernav = ({ slidernav, setslidernav }) => {
  const [Active, setActive] = useState("Home");
  let location = useLocation();
  console.log(location, "location");

  return (
    <div
      className={` ${
        slidernav ? "translate-y-0" : "-translate-y-full"
      } bg-mist w-full h-full transition-all duration-300 z-10 linear fixed flex flex-col`}
    >
      <div
        className={`flex items-center justify-between p-4 w-full max-w-332 mx-auto `}
      >
        <div className={`flex items-center justify-center gap-2`}>
          <img
            src={Logo}
            alt="logo"
            className={`max-w-[50px] md:max-w-[70px]`}
          />
          <div className={`flex flex-col items-start justify-center`}>
            <h1
              className={`font-figtree font-extrabold leading-[120%] italic text-violet1 text-[28px] md:text-[32px]`}
            >
              MOVEXPRESS
            </h1>
            <p
              className={`font-figtree font-medium text-sm md:text-base italic leading-[120%] text-violet1/80`}
            >
              Expressly Delivered
            </p>
          </div>
        </div>
        <button
          onClick={() => setslidernav(false)}
          className={`bg-violet1 p-2 hover:opacity-80 h-fit rounded-lg md:rounded-xl transition-all duration-300 linear`}
        >
          <X className={`text-mist w-[30px] md:w-10 h-[30px] md:h-10 `} />
        </button>
      </div>

      <ul className={`flex items-center justify-center w-full flex-col grow`}>
        {navlist.map((obj, i) => {
          return (
            <li key={i}>
              <a
                key={i}
                href={obj.url}
                onClick={(() => setActive(obj.name), () => setslidernav(false))}
                className={`${
                  location === obj.url
                    ? "italic underline !font-bricolage cursor-default"
                    : " hover:text-vinegar"
                } font-figtree font-medium leading-[150%] text-4xl md:text-5xl lg:text-[64px] text-violet1`}
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
