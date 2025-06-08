import Navbar from "./components/Layout/Navbar";
import Footer from "./components/Layout/Footer";
import TitleAndMusic from "./components/Layout/TitleAndMusic";
import Home from "./pages/Home";
import Memory from "./pages/Memory";
import ConnectFour from "./pages/ConnectFour";
import NotFound from "./pages/NotFound";
import "./styles/retro.css";
import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";

function App() {
  const [selectedSong, setSelectedSong] = useState(0); // 0 = OFF
  const [volume, setVolume] = useState(0.5);

  return (
    <>
      <Navbar />
      <TitleAndMusic
        selected={selectedSong}
        setSelected={setSelectedSong}
        volume={volume}
        setVolume={setVolume}
      />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/memory" element={<Memory />} />
          <Route path="/connect-four" element={<ConnectFour />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
