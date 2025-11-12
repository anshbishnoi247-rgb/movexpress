import AOS from "aos";
import "aos/dist/aos.css";
import "./App.css";
import { useEffect } from "react";
import { Route, Routes } from "react-router";
import ScrollToTop from "./common/ScrollToTop";
import AboutPage from "./pages/AboutPage";
import BlogsPage from "./pages/BlogsPage";
import BlogDetailsPage from "./pages/BlogDetailsPage";
import Homepage from "./pages/Homepage";
import ServicesPage from "./pages/ServicesPage";
import SignupPage from "./pages/SignupPage";
import VanservicesPage from "./pages/VanservicesPage";

function App() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);
  return (
    <>
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
    </>
  );
}

export default App;
