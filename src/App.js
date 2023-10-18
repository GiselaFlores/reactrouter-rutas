import './App.css';
import { Routes, Route } from "react-router-dom"
import Inicio from "./Inicio"
import Contacto from "./Contacto"


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <Inicio /> } />
        <Route path="contacto" element={ <Contacto /> } />
      </Routes>
    </div>
  );
}

export default App;
