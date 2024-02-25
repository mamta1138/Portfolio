import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './/Components/Navbar';
import Home from './/Pages/Home';
import Projects from './/Pages/Projects';
import About from './/Pages/About';
import Contact from './/Pages/Contact';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" component={Home} />
        <Route path="/projects" component={Projects} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
      </Routes>
    </Router>
  );
}

export default App;