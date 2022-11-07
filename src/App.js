import './App.css';
import Header from './Components/Header';
import React from 'react';
import About from './Components/About';
import Box from '@mui/material/Box';

function App() {
  return (
    <div className='App'>
        <Header />
        <Box sx={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
          <About />
        </Box>
    </div>
)}

export default App;
