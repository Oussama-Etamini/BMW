import { createContext , useState } from 'react';
import './App.css';
import Home from "./pages/Home";
import About from "./pages/About";
import Menu from "./pages/Menu";
import Contact from "./pages/Contact";
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import MenuOne from './pages/MenuOne';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


export const varF = createContext();

function App() {
  const [click, setClick] = useState(false);
  const [click1, setClick1] = useState(false);
  return (
    <div className="App">
      <varF.Provider value={{ click, setClick, click1, setClick1 }}>
        <Router>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/menu' element={<Menu />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/menu/:id' element={<MenuOne />} />
          </Routes>
          <Footer />
        </Router>
      </varF.Provider>
    </div>
  );
}
export default App;