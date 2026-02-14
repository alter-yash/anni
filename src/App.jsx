import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import Calendar from './pages/Calendar';
import Letter from './pages/Letter';
import Journey from './pages/Journey';

function App() {
  return (
    <Router>
      <div className="relative min-h-screen">
        {/* Background decoration */}
        <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-32 h-32 bg-romantic-rose/20 rounded-full blur-3xl" />
          <div className="absolute bottom-40 right-20 w-40 h-40 bg-romantic-pink/20 rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/3 w-36 h-36 bg-romantic-coral/20 rounded-full blur-3xl" />
        </div>

        {/* Page Routes */}
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/calendar" element={<Calendar />} />
            <Route path="/letter" element={<Letter />} />
            <Route path="/journey" element={<Journey />} />
          </Routes>
        </AnimatePresence>

        {/* Navigation Dock */}
        <Navigation />
      </div>
    </Router>
  );
}

export default App;
