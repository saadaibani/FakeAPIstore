// src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import ViewProduct from "./pages/ViewProduct";
import Update from "./pages/Update";
import "./App.css";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/view/:id" element={<ViewProduct />} />
          <Route path="/update/:id" element={<Update />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
