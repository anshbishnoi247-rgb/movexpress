import "./App.css";
import Hero from "./components/hero";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <div className={`bg-violet1`}>
        <Navbar />
        <Hero />
      </div>
    </>
  );
}

export default App;
