
import './App.css';
import Footer from './components/Footer';
import Header from "./components/Header.jsx";
import HomePage from "./components/HomePage.jsx";
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import Skills from './components/Skills';
import Question from './components/Question';
import Spotify from './components/Spotify';
import { AnimatePresence } from "framer-motion";

function App() {
  const location = useLocation();

  return (
    <div className="App">
      <AnimatePresence>
        
        <Header />
        <Routes location={location} key={location.pathname}>

          <Route path="/" element={<HomePage />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/question" element={<Question />} />
          <Route path="/spotify" element={<Spotify />} />
          
          
         </Routes>
         <Footer />

      </AnimatePresence>
    </div>
  );
}

export default App;
