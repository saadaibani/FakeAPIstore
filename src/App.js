import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ViewProduct from './pages/ViewProduct';
import Update from './pages/Update';
import { ToastContainer } from 'react-toastify';
import './styles/global.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/view/:id" element={<ViewProduct />} />
          <Route path="/update/:id" element={<Update />} />
        </Routes>
        <ToastContainer />
      </div>
    </Router>
  );
}

export default App;
