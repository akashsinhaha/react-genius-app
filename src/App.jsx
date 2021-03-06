import React from "react";
import Topbar from "./components/topbar/Topbar";
import Intro from "./components/intro/Intro";
import Contact from "./components/contact/Contact";
import Testimonials from "./components/testimonials/Testimonials";
import Works from "./components/works/Works";
import Portfoio from "./components/portfolio/Portfolio";
import "./app.scss";
import { useState } from "react";
import Menu from "./components/menu/Menu";


function App() {

  const [menuOpen,setMenuOpen] = useState(false);



  return (
    <div className="app">
    <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
    <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
    <div className="sections">
      <Intro />
      <Portfoio />
      <Works />
      <Testimonials />
      <Contact />
    </div>
    </div>
  );
}

export default App;
