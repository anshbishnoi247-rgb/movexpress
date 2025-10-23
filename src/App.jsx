import { Routes, Route } from "react-router";
import "./App.css";
import AboutPage from "./pages/AboutPage";
import Homepage from "./pages/Homepage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about-us" element={<AboutPage />} />
      </Routes>
    </>
  );
}

export default App;
