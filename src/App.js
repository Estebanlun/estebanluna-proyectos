import "./App.css";
import { Routes, Route } from "react-router";
import NavBar from "./Components/NavBar/NavBar";
import HomePage from "./Pages/HomePage/HomePage";
import MarvelGallery from "./Projects/1-MarvelGallery/MarvelGallery";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/MarvelGallery" element={<MarvelGallery />} />
      </Routes>
    </div>
  );
}

export default App;
