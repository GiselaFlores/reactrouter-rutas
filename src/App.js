import React from 'react';
import './App.css';
import { Routes, Route } from "react-router-dom";
import Inicio from "./componentes/Inicio";
import Contacto from "./componentes/Contacto";


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={ <Inicio /> } />
        <Route path="contacto" element={ <Contacto /> } />
      </Routes>
    </>
  );
}

export default App;
