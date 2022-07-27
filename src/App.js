/** @jsxImportSource @emotion/react */

import { useState } from 'react';
// import './App.css';
import Container from '@mui/material/Container';
import Navbar from './components/Navbar';
import About from './components/About';
import Projects from './components/Projects';

const appStyles = {
  height: '100vh',
  marginTop: 0,
  textAlign: 'center',
  backgroundColor: '#282c34',
  color: 'white'
}

function App() {
  return (
    <div className="App" css={appStyles}>
      <Container>
        <Navbar />
        <About />
        <Projects />
      </Container>
    </div>
  );
}

export default App;
