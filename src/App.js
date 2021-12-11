import "./App.scss";
import "@fontsource/roboto";
import Header from "./components/layout/Header";
import "./_variables.module.scss";
import { motion } from "framer-motion";
import React from "react";
import Btn from "./components/layout/Btn";
import { Routes, Route } from "react-router-dom";
import Home from "./components/layout/Home";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";

function App() {
  return (
    <React.Fragment>
      <Header />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/projects" exact element={<Projects />} />
        <Route path="/Skills" exact element={<Skills />} />
        <Route path="/Contact" exact element={<Contact />} />
        <Route path="*" exact element={<Home />} />
      </Routes>
    </React.Fragment>
  );
}

export default App;
