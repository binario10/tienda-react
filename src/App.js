

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Menu from "./components/Menu";

import Inicio from "./pages-components/Inicio";
import Dramaticos from "./pages-components/Dramaticos";
import Comedias from "./pages-components/Comedias";
import Misterio from "./pages-components/Misterio";
import Terror from "./pages-components/Terror";
import { useState } from "react";
import CarritoCompras from "./pages-components/CarritoCompras";



const App = () => {

  const [cart, setCart] = useState([]);  //useState para agregar al carrito productos

  return (
    <Router>
      <Menu />
        <Routes>
          <Route path="/" element={<Inicio cart={cart} setCart={setCart} />} />
          <Route path="/dramaticos" element={<Dramaticos  cart={cart} setCart={setCart} />} />
          <Route path="/comedias" element={<Comedias cart={cart} setCart={setCart} />} />
          <Route path="/misterio" element={<Misterio cart={cart} setCart={setCart} />} />
          <Route path="/terror" element={<Terror  cart={cart} setCart={setCart} />} />
          <Route path="/carrito" element={<CarritoCompras cart={cart} setCart={setCart}/>} />
        </Routes>
    </Router>
  );
};

export default App;