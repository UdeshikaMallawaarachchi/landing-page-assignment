import React from "react";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import heroImage from "./images/hero_image.jpg";
import "./styles/styles.scss";

const App = () => {
  return (
    <div>
      <section className="hero-section" style={{
        backgroundImage: `url(${heroImage})`,
      }}>
        <Header />
        <HeroSection />
      </section>
    </div>
  );
};

export default App;
