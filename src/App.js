import React from "react";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import About from "./components/About/About";
import Skills from "./components/skills/Skills";
import Services from "./components/services/Services";
import Qualifications from "./components/qualification/Qualifications";
// import Testimonials from "./components/testimonials/Testimonials";
import Contact from "./components/contact/Contact";
import Footer from "./components/Footer/Footer";
import ScrollUp from "./components/scrollup/ScrollUp";
import Work from "./components/Work/Work";
import "./App.css";

const App = () => {
  return (
    <>
      <Header />

      <main className="main">
        <Home />
        <About />
        <Skills />
        <Services />
        <Qualifications />
        <Work/>
        {/* <Testimonials /> */}
        <Contact />
      </main>

      <Footer />
      <ScrollUp />
    </>
  );
};

export default App;
