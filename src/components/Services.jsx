import { Heading1 } from "../common/Heading";
import React from "react";

const Services = () => {
  return (
    <section>
      <div className={`flex flex-col items-center justify-center gap-[18px]`}>
        <Heading1 head={"Our Top Rated Services"} />
        <Para />
      </div>
    </section>
  );
};

export default Services;
