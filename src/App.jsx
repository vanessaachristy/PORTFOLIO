import React from 'react';

import "./app.css"

import Topbar from "./components/topbar/Topbar"
import Intro from "./components/intro/Intro"
import Education from "./components/education/Education"
import Portfolio from "./components/portfolio/Portfolio"
import Contact from "./components/contact/Contact";
import Menu from "./components/menu/Menu"
import {useState} from "react";

function App(){

  const [menuOpen, setMenuOpen] = useState(0)

  return (
  <div className="app">
    <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
    <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
    <div className="section">
      <Intro/>
      <Portfolio/>
      <Education/>
      <Contact/>
    </div>
  </div>
  );
}
export default App;
