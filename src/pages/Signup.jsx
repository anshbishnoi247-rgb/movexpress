import signupbg from "../assets/images/signupbg.webp";
import {
  DownloadHeading,
  HeadingStore,
  Paragraph,
  Paragraphsub,
  SignupHeading,
} from "../common/Heading";
import { download } from "../common/Helper";
import { Apple } from "../common/Icons";
import Personalinfo from "../components/Personalinfo";
import Navbar from "../components/Navbar";

const Signup = () => {
  return (
    <section class={`max-w-full overflow-hidden mx-auto`}>
      <div className={`bg-violet1`}>
        <Navbar />
      </div>
      <img
        src={signupbg}
        className="min-w-[1543px] -z-1 relative -mt-74 h-[606px] w-fit mx-auto position-center"
      />

      <div className="flex flex-col xl:flex-row items-center xl:items-start justify-center w-full mx-auto px-5  gap-[50px]">
        <aside className="p-4 md:p-6 lg:p-8 xl:p-12 flex flex-col items-center bg-white -mt-46 justify-center max-w-[745px] w-full mx-">
          <div className={`flex items-center w-full justify-between`}>
            <div className={`flex flex-col items-start gap-3 justify-center`}>
              <SignupHeading content="Sign Up as a Driver" />

              <p
                className={`text-inter text-sm sm:text-base text-violet1/72 leading-[130%] md:leading-[164%]`}
              >
                Tell us your pickup and destination
              </p>
            </div>
            <p
              className={`font-inter text-xs text-violet1 leading-6 font-semibold px-4 py-[6px] bg-violet1/12 rounded-full`}
            >
              1 Personal Info
            </p>
          </div>

          <div className="w-full h-2 my-8 bg-mist rounded-full overflow-hidden">
            <div className="w-[50%] h-full bg-violet1 rounded-full"></div>
          </div>
          <Personalinfo />
        </aside>

        <aside
          className={`max-w-[501px] text-center flex flex-col items-center justify-center gap-10 mt-10 xl:mt-[75px]`}
        >
          <div className="flex flex-col items-center justify-center gap-7">
            <Paragraph
              className="!text-midgray"
              para={
                "Earn as you drive The more you drive, the more you earn! You get paid weekly."
              }
            />

            <Paragraph
              className="!text-midgray"
              para={
                "Drive when you want, based on where you are, we simply provide the jobs."
              }
            />

            <Paragraph
              className="!text-midgray"
              para={
                "No more quoting or bidding for jobs-Movexpress offers transparent pricing with great rates of pay. The pay you see on the job alerts is the exact amount that will be paid into your account."
              }
            />
          </div>
          <div className={`flex flex-col items-center jutify-center gap-6`}>
            <Paragraphsub
              para="Get the apps for a better experience"
              className="!text-eerieblack !font-medium"
            />

            <div className="flex flex-col lg:flex-row items-center justify-center gap-4">
              {download.map((obj, index) => {
                return (
                  <div className="flex items-center jsutify-center bg-[#0A0A0A] rounded-full py-4 px-8 gap-[11px]">
                    {obj.svg}
                    <div className="flex items-start flex-col jsutify-center gap-1">
                      <DownloadHeading
                        content={obj.head}
                        className={`${
                          index === 1 && "font-bold tracking-[-1px]"
                        }`}
                      />
                      <HeadingStore content={obj.name} />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
};

export default Signup;
