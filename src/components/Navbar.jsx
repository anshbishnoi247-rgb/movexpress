import { Slidericon } from "../common/Icons";
import Logo from "../assets/images/favicon.webp";
import Slidernav from "./Slidernav";
import { useState } from "react";

const Navbar = () => {
  const [slidernav, setslidernav] = useState(false);

  return (
    <>
      <Slidernav slidernav={slidernav} setslidernav={setslidernav} />
      <nav
        className={`flex items-center justify-between py-3 md:py-4 px-5 max-w-324 mx-auto`}
      >
        <a href="/">
          <div className={`flex items-center justify-center gap-2`}>
            <img
              src={Logo}
              alt="logo"
              className={`max-w-[50px]  md:max-w-[70px]`}
            />
            <div className={`flex flex-col items-start justify-center`}>
              <h1
                className={`font-figtree font-extrabold leading-[120%] italic text-white text-[28px] md:text-[32px]`}
              >
                MOVEXPRESS
              </h1>
              <p
                className={`font-figtree font-medium text-sm md:text-base italic leading-[120%] text-white/80`}
              >
                Expressly Delivered
              </p>
            </div>
          </div>
        </a>
        <button onClick={() => setslidernav(true)}>
          <Slidericon />
        </button>
      </nav>
      <hr className="border-b-1 border-white/10" />
    </>
  );
};

export default Navbar;
