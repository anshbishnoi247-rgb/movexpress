import { useEffect, useState } from "react";
import signupbg from "../assets/images/signupbg.webp";
import { SignupHeading } from "../common/Heading";
import Navbar from "../components/Navbar";
import Personalinfo from "../components/Personalinfo";
import Signupfooter from "../components/Signupfooter";
import Vehicleinfo from "../components/Vehicleinfo";

const Signup = () => {
  const [filled, setFilled] = useState(null);

  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return (
    <section className={`max-w-full mx-auto`}>
      <div className={`bg-violetprimary`}>
        <Navbar />
      </div>
      <img
        src={signupbg}
        className="min-w-[1543px] -z-1 relative -mt-74 h-[606px] w-fit mx-auto position-center"
      />

      <div className="flex flex-col xl:flex-row items-center xl:items-start justify-center w-full mx-auto px-5  gap-[50px]">
        <aside className="p-4 md:p-6 lg:p-8 xl:p-12 flex flex-col items-center bg-white -mt-46 justify-center max-w-[745px] w-full mx-">
          <div
            className={`flex flex-col sm:flex-row gap-5 sm:gap-0 items-center w-full justify-between`}
          >
            <div
              className={`flex flex-col items-center sm:items-start gap-3 justify-center`}
            >
              <SignupHeading content="Sign Up as a Driver" />

              <p className="text-inter text-sm sm:text-base text-violetprimary/72 leading-[130%] md:leading-[164%];">
                Tell us your pickup and destination
              </p>
            </div>
            <p
              className={`font-inter text-xs text-violetprimary leading-6 font-semibold px-4 py-[6px] bg-violetprimary/12 rounded-full`}
            >
              {!filled ? "1. Personal Info" : "2. Vehicle info"}
            </p>
          </div>

          <div className="w-full h-2 my-8 bg-mist rounded-full overflow-hidden">
            <div
              className={`${
                !filled ? "w-1/2" : "w-full"
              } h-full bg-violetprimary rounded-full`}
            ></div>
          </div>
          {!filled ? <Personalinfo setFilled={setFilled} /> : <Vehicleinfo />}
        </aside>

        <Signupfooter />
      </div>
    </section>
  );
};

export default Signup;
