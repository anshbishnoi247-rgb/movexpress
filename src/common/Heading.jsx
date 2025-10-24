import { Heading, Para } from "./Helper";

const heading = () => {
  return (
    <div className={`flex flex-col items-center justify-center gap-[18px]`}>
      <Heading />
      <Para />
    </div>
  );
};

export default heading;
