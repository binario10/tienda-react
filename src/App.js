

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Menu from "./components/Menu";

import Inicio from "./pages-components/Inicio";
import Dramaticos from "./pages-components/Dramaticos";
import Comedias from "./pages-components/Comedias";
import Misterio from "./pages-components/Misterio";
import Terror from "./pages-components/Terror";
import Contacto from "./pages-components/Contacto";

import { useState } from "react";

const App = () => {

  const [cart, setCart] = useState([]);

  return (
    <Router>
      <Menu />
      <div className="container">
        <Routes>
          <Route path="/" element={<Inicio cart={cart} setCart={setCart} />} />
          <Route path="/dramaticos" element={<Dramaticos  cart={cart} setCart={setCart} />} />
          <Route path="/comedias" element={<Comedias cart={cart} setCart={setCart} />} />
          <Route path="/misterio" element={<Misterio cart={cart} setCart={setCart} />} />
          <Route path="/terror" element={<Terror  cart={cart} setCart={setCart} />} />
          <Route path="/contacto" element={<Contacto />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;