import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import About from './Pages/About';
import Projects from './Pages/Projects';

const App = () => {
  return (
    <Router>
      <Navbar />
      <div className="pt-16 md:pt-0 bg-gray-50"> {/* Padding to prevent content being hidden behind the fixed navbar */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          {/* Add other routes as needed */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
