import React from "react";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import PromoGrids from "./Components/PromoGrids";
import Footer from "./Components/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <Hero/>
      <PromoGrids/>
      <Footer/>
    </div>
  );
}

export default App;
