import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Team from "./components/Team";
import Tomorrow from "./components/Tomorrow";
import Progress from "./components/Progress";
import Offer from "./components/Offer";
import Testimonials from "./components/Testimonials";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";
import "./App.css";
export default function App() {
  return (
    <div>
      <Header />
      <Hero />
      <Team />
      <Tomorrow />
      <Progress />
      <Offer />
      <Testimonials />
      <Newsletter />
      <Footer />
    </div>
  );
}
