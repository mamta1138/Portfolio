import About from "./Components/About";
import Contact from "./Components/Contact";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import Skills from "./Components/Skills";
import Work from "./Components/Work";
import React, { useEffect } from 'react';


function App() {
  useEffect(() => {
    document.title = "Mamta Ghimire";
  }, []);
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Work />
      <Contact />
      
    </div>
  );
}

export default App;
