// import './App.css';
import Container from '@mui/material/Container';
import Navbar from './components/Navbar';
import About from './components/About';
import Projects from './components/Projects';

const appStyles = {
  height: '100vh',
  marginTop: 0,
  textAlign: 'center',
  color: 'white'
}

const App = () => {
  return (
    <div className='App' style={appStyles}>
      <Container>
        <Navbar />
        <About />
        <Projects />
      </Container>
    </div>
  );
}

export default App;
