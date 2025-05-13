import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Signup from './components/Signup';
import Login from './components/Login';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Contact from './components/Contact';
import FoodDishes from './components/Dishes';

function App() {
  return (
    <Router>
      <Navbar />
      <div style={{ textAlign: 'center', marginTop: '40px' }}>
        <Routes>
          <Route path="/" element={<Navigate to="/signup" />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/dishes" element={<FoodDishes/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
