import { Routes, Route } from "react-router";
import "./App.css";
import AboutPage from "./pages/AboutPage";
import Homepage from "./pages/Homepage";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import ServicesPage from "./pages/ServicesPage";
import BlogsPage from "./pages/BlogsPage";
import VanservicesPage from "./pages/VanservicesPage";
import SignupPage from "./pages/SignupPage";
import ScrollToTop from "./common/ScrollToTop";
import BookWithUs from "./pages/BookWithUs";

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
        <Route path="/van" element={<VanservicesPage />} />
        <Route path="/sign-up" element={<SignupPage />} />
        <Route path="/booking-with-us" element={<BookWithUs />} />
      </Routes>
    </>
  );
}

export default App;
