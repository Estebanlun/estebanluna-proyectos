import "./App.css";
import { Routes, Route } from "react-router";
import NavBar from "./Components/NavBar/NavBar";
import HomePage from "./Pages/HomePage/HomePage";
import MarvelGallery from "./Projects/1-MarvelGallery/MarvelGallery";
import ProgresSteps from "./Projects/2-ProgresSteps/ProgresSteps";
import CasinoRoulette from "./Projects/3-Ruleta/Ruleta";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/MarvelGallery" element={<MarvelGallery />} />
        <Route exact path="/ProgresSteps" element={<ProgresSteps />} />
        <Route exact path="/Ruleta" element={<CasinoRoulette />} />
      </Routes>
    </div>
  );
}

export default App;
