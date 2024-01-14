import './App.css';
import Home from "./pages/Home";
import About from "./pages/About";
import Menu from "./pages/Menu";
import Contact from "./pages/Contact";
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import MenuOne from './pages/MenuOne';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from 'react';


function App() {
  const [login, setLogin] = useState(false);
  return (
    <div className="App">
      <Router>
        <Navbar login={login}/>
        <Routes>
          <Route path='/' element={<Home login={login}/>} />
          <Route path='/about' element={<About />} />
          <Route path='/menu' element={<Menu />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/menu/:id' element={<MenuOne />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
