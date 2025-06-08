import { Routes, Route } from 'react-router-dom';
import Intro from './pages/intro-page';
import Home from './pages/home';
import './App.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Intro />} />
      <Route path="/home" element={<Home />} />
    </Routes>
  );
}

export default App;