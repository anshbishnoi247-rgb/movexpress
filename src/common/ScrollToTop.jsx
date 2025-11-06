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
      className={`${
        visible > 300 ? "fixed" : "hidden"
      } right-3 bottom-3 z-10 rounded-full w-12 h-12 bg-vinegar hover:bg-violet1 transition-all duration-300 ease-in-out flex items-center justify-center animate-bounce`}
    >
      <ChevronUp size={30} className="text-white" />
    </button>
  );
};

export default ScrollToTop;
