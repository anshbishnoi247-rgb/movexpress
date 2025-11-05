import {
  DownloadHeading,
  HeadingStore,
  Paragraph,
  Paragraphsub,
} from "../common/Heading";
import { download } from "../common/Helper";

const Signupfooter = () => {
  return (
    <aside
      className={`max-w-[501px] sticky top-5 text-center flex flex-col items-center justify-center gap-10 mt-10 xl:mt-[75px]`}
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
              <div
                key={index}
                className="flex items-center jsutify-center bg-[#0A0A0A] rounded-full py-4 px-8 gap-[11px]"
              >
                {obj.svg}
                <div className="flex items-start flex-col jsutify-center gap-1">
                  <DownloadHeading
                    content={obj.head}
                    className={`${index === 1 && "font-bold tracking-[-1px]"}`}
                  />
                  <HeadingStore content={obj.name} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </aside>
  );
};

export default Signupfooter;
