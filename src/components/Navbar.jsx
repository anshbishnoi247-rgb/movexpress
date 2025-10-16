import { Slidericon } from "../common/Icons";
import Logo from "../assets/images/favicon.webp";
import Slidernav from "./Slidernav";
import { useState } from "react";

const Navbar = () => {
  const [slidernav, setslidernav] = useState(false);

  return (
    <>
      <Slidernav slidernav={slidernav} setslidernav={setslidernav} />
      <nav className={`flex items-centert justify-between px-18 py-[18.5px] `}>
        <div className={`flex items-center justify-center gap-2`}>
          <img src={Logo} alt="logo" className={`max-w-[70px]`} />
          <div className={`flex flex-col items-start justify-center`}>
            <h1
              className={`font-figtree font-extrabold leading-[140%] italic text-white text-[32px]`}
            >
              MOVEXPRESS
            </h1>
            <p
              className={`font-figtree font-medium text-base italic leading-[160%] text-white/80`}
            >
              Expressly Delivered
            </p>
          </div>
        </div>
        <button onClick={() => setslidernav(true)}>
          <Slidericon />
        </button>
      </nav>
    </>
  );
};

export default Navbar;
