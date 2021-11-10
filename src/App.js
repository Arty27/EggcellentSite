import React, { useState, useEffect} from 'react';
import './App.css';
import { Route, Routes, Switch } from 'react-router-dom';
import Home from './pages/index';
import Footer from './components/footer';
import About from './pages/about';
import Menu from './pages/menu';
import Navbar from './components/navbar';
import Dropdown from './components/dropdown';


function App() {

  const [isOpen, setIsOpen]=useState(false)
  const toggle=()=>{
    setIsOpen(!isOpen)
  }
  useEffect(()=>{
    const hideMenu=()=>{
      if(window.innerWidth>768 && isOpen){
        setIsOpen(false)
      }
    }
    window.addEventListener('resize',hideMenu)
    return ()=>{
      window.removeEventListener('resize',hideMenu)
    }
  })
  return (
    <div className="App">
      <Navbar toggle={toggle}/>
      <Dropdown isOpen={isOpen} toggle={toggle} />
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/menu" element={<Menu />} />
      <Route path="/about" element={<About />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
