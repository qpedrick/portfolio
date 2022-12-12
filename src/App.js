import './App.css';
import React from 'react';
import Header from './Components/Header';
import About from './Components/About';
import Projects from './Components/Projects';
import Footer from './Components/Footer';

function App() {
  return (
    <div className='App' >
        <Header />
        <About />
        <Projects />
        <Footer />
    </div>
)}

export default App;
