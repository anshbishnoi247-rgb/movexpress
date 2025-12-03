import { X } from "lucide-react";

import { navlist } from "../common/Helper";
import { useState } from "react";
import { Link, useLocation, useParams } from "react-router";
import Logopamplate from "../common/Logopamplate";

const Slidernav = ({ slidernav, setslidernav }) => {
  const [Active, setActive] = useState("Home");
  let location = useLocation().pathname;

  return (
    <div
      className={` ${
        slidernav ? "translate-y-0" : "-translate-y-full"
      } bg-mist w-full h-full overflow-hidden transition-all duration-300 z-10 linear fixed flex flex-col`}
    >
      <div
        className={`flex items-center justify-between p-4 w-full max-w-324 mx-auto `}
      >
        <Logopamplate />
        <button
          onClick={() => setslidernav(false)}
          className={`bg-violetprimary p-2 hover:opacity-80 h-fit rounded-lg md:rounded-xl transition-all duration-300 linear`}
        >
          <X className={`text-mist w-[30px] md:w-10 h-[30px] md:h-10 `} />
        </button>
      </div>

      <ul className={`flex items-center justify-center w-full flex-col grow`}>
        {navlist.map((obj, i) => {
          return (
            <li key={i}>
              <Link
                to={{ pathname: obj.url }}
                key={i}
                onClick={(() => setActive(obj.name), () => setslidernav(false))}
                className={`${
                  location === obj.url
                    ? "italic underline !font-bricolage cursor-default"
                    : " hover:text-vinegar"
                } font-figtree font-medium leading-[150%] text-4xl md:text-5xl lg:text-[64px] text-violetprimary`}
              >
                {obj.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Slidernav;
