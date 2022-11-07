import './App.css';
import Header from './Components/Header';
import React from 'react';
import About from './Components/About';
import Projects from './Components/Projects';

function App() {
  return (
    <div className='App' >
        <Header />
        <About />
        <Projects />
    </div>
)}

export default App;
