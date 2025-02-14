import React from "react";
import Navbar from "./Components/navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import About from "./Components/about/About";
import Services from "./Components/services/Services";
import MyWork from "./Components/myWork/MyWork";
import Contact from "./Components/contact/Contact";
import Footer from "./Components/footer/Footer";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <MyWork />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
