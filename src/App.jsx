import AOS from "aos";
import "aos/dist/aos.css";
import "./App.css";
import { useEffect, useState } from "react";
import { Route, Routes } from "react-router";
import ScrollToTop from "./common/ScrollToTop";
import AboutPage from "./pages/AboutPage";
import BlogsPage from "./pages/BlogsPage";
import BlogDetailsPage from "./pages/BlogDetailsPage";
import Homepage from "./pages/Homepage";
import ServicesPage from "./pages/ServicesPage";
import SignupPage from "./pages/SignupPage";
import VanservicesPage from "./pages/VanservicesPage";
import { InformationContext } from "./context/context";
import { app } from "./fireBaseConfig.js";

function App() {
  const [startDestination, setstartDestination] = useState("");
  const [finalDestination, setfinalDestination] = useState("");
  const [choosedvan, setChoosedVan] = useState("");
  const [helper, setHelper] = useState("");
  const [loadingunloadingTime, setLoadingUnloadingTime] = useState("");
  const [startDate, setStartDate] = useState("");
  const [startTime, setStartTime] = useState("");
  const [imageValue, setImageValue] = useState("");
  const [quantities, setQuantities] = useState({});

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <>
      <InformationContext.Provider
        value={{
          startDestination,
          finalDestination,
          setstartDestination,
          setfinalDestination,
          setChoosedVan,
          choosedvan,
          helper,
          setHelper,
          loadingunloadingTime,
          setLoadingUnloadingTime,
          startDate,
          setStartDate,
          startTime,
          setStartTime,
          imageValue,
          setImageValue,
          quantities,
          setQuantities,
        }}
      >
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about-us" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/blogs" element={<BlogsPage />} />
          <Route path="/blog/:blogid" element={<BlogDetailsPage />} />
          <Route path="/van" element={<VanservicesPage />} />
          <Route path="/sign-up" element={<SignupPage />} />
        </Routes>
      </InformationContext.Provider>
    </>
  );
}

export default App;
