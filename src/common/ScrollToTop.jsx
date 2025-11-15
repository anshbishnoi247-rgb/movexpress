import { ChevronUp } from "lucide-react";
import { useState } from "react";

const ScrollToTop = () => {
  const [visible, setVisible] = useState(null);

  window.addEventListener("scroll", () => {
    setVisible(window.scrollY);
  });

  return (
    <button
      onClick={() => window.scroll(0, 0)}
      className={`${
        visible > 300 ? "flex" : "hidden"
      } group scrolltotop-style cursor-pointer`}
    >
      <ChevronUp
        size={30}
        className="text-white group-hover:text-vinegar transition-all duration-300 ease-in-out"
      />
    </button>
  );
};

export default ScrollToTop;
