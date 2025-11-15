import { useState } from "react";

const Buttonsecondary = ({ content, type, icon }) => {
  const [pageNo, setpageNo] = useState("1");
  return (
    <div className="overflow-hidden w-full group relative bg-vinegar rounded-xl ">
      <button type={type} className="button-style-secondary cursor-pointer">
        {content} {icon ? icon : null}
      </button>
      <div className="button-style-secondary-hover"></div>
    </div>
  );
};

export default Buttonsecondary;
