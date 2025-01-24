import { useState } from 'react'

import './App.css'
import Navbar from './components/NavBar';
import Nosotros from './components/Nosotros';
const App = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Nosotros></Nosotros>  
    </div>
  );
};

export default App
