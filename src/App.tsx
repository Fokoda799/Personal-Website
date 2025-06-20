import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Journey from './pages/Journey';
import Solution from './pages/Solution';
import Prototype from './pages/Prototype';
import Reflection from './pages/Reflection';
import Conclusion from './pages/Conclusion';
import ScrollToTop from './components/ux/ScrollTop';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        <Navbar />
        <main className="pt-16">
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/journey" element={<Journey />} />
            <Route path="/solution" element={<Solution />} />
            <Route path="/prototype" element={<Prototype />} />
            <Route path="/reflection" element={<Reflection />} />
            <Route path="/conclusion" element={<Conclusion />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;