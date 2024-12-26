import React from 'react';
import './App.css'; // Importing the CSS file for styling (optional)
import { Route, Routes } from 'react-router-dom'; // If using React Router


// Example components for routing
import Header from './components/Header';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home'; 
import About from './pages/About'; 
import Courses from './pages/Courses';
import Contact from './pages/Contact';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      {/* Routing setup */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/contact" element={<Contact />} />

      </Routes>
      <Footer />
    </div>
  );
}

export default App;
