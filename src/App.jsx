import React from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import About from "./pages/About";
import Service from "./pages/Service";
import Doctors from "./pages/Doctors";
import Appointment from "./pages/Appointment";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div id="home">
        <Header />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="services">
        <Service />
      </div>
      <div id="doctors">
        <Doctors />
      </div>
      <div id="appointment">
        <Appointment />
      </div>
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
