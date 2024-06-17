import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Biography from './components/Biography';
import Interests from './components/Interests';
import Contact from './components/Contact';
import Resume from './components/Resume';



const App: React.FC = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/biography" element={<Biography />} />
          <Route path="/interests" element={<Interests />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/" element={<Biography />} /> {/* Default route */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;