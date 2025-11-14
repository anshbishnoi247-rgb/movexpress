import Marquee from "react-fast-marquee";
import { slidecontent } from "../common/Helper";

const Slides = () => {
  return (
    <Marquee
      speed={80}
      gap={100}
      direction="right"
      gradient={false}
      className="bg-violetprimary p-6 md:py-8"
    >
      {slidecontent.map((obj, index) => {
        return (
          <p className="font-bricolage text-mist whitespace-nowrap border-none font-medium leading-[100%] text-xl md:text-2xl mr-25">
            {obj}
          </p>
        );
      })}
    </Marquee>
  );
};

export default Slides;
