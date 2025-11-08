import { ChevronUp } from "lucide-react";
import { useEffect, useState } from "react";

const ScrollToTop = () => {
  const [visible, setVisible] = useState(null);

  window.addEventListener("scroll", () => {
    setVisible(window.scrollY);
  });

  return (
    <button
      onClick={() => window.scroll(0, 0)}
      className={`${visible > 300 ? "flex" : "hidden"} scrolltotop-style`}
    >
      <ChevronUp size={30} className="text-white" />
    </button>
  );
};

export default ScrollToTop;
