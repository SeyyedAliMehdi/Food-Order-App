import './App.css';

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home"
import About from "./pages/About";
import Menu from "./pages/Menu";
import Contact from "./pages/Contact";
import {Routes, Route, Link } from 'react-router-dom';


function App() {
  return (
    <div className="App">
        <Navbar/>
        <Routes>
            <Route path="/" exact element={<Home/>} />
            <Route path="/menu" exact element={<Menu/>} />
            <Route path="/about" exact element={<About/>} />
            <Route path="/contact" exact element={<Contact/>} />
        </Routes>
        <Footer/>
    </div>
  );
}

export default App;
