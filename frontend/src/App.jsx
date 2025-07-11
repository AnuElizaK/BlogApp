import { useState } from "react";
import Home from "./components/Home";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom' //missing code added here
import Navbar from "./components/Navbar";
import Add from "./components/Add";
const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<Add />} />
      </Routes>
    </>
  );
}

export default App;