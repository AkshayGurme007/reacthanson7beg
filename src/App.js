import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Student from "./Components/Student";
import Contact from "./Components/Contact";
import "./App.css";
import Navbar from "./Components/Navbar.jsx";
import Update from "./Components/Update";
import { Studata } from "./Components/Studata";
// import Form from "./components/Form"

function App() {
  return (
    <div className="App">
      <Navbar className="navbar" />
      <Studata>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/students" element={<Student />} />
          <Route path="/students-desc" element={<Update />} />
          <Route path="/students-desc/:id" element={<Update />} />
          <Route path="/contact-us" element={<Contact />} />
        </Routes>
      </Studata>
    </div>
  );
}

export default App;
