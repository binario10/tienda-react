

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Menu from "./components/Menu";

import Inicio from "./pages-components/Inicio";
import Dramaticos from "./pages-components/Dramaticos";
import Comedias from "./pages-components/Comedias";
import Misterio from "./pages-components/Misterio";
import Terror from "./pages-components/Terror";

import CarritoCompras from "./pages-components/CarritoCompras";
import useAddToCart from "./components/useAddToCart";  //importo el hook custom para addCart



const App = () => {

  //const [cart, setCart] = useState([]);  //useState para agregar al carrito productos
  const { cart, addToCart, successMessage } = useAddToCart();  //custom Hook
  

  return (
    <Router>
      <Menu />
      {/* Mensaje de confirmación */}
  
        <Routes>
          <Route path="/" element={<Inicio/>} />
          <Route path="/dramaticos" element={<Dramaticos  cart={cart} addToCart={addToCart} successMessage={ successMessage} />} />
          <Route path="/comedias" element={<Comedias cart={cart} addToCart={addToCart} successMessage={ successMessage}/>} />
          <Route path="/misterio" element={<Misterio cart={cart} addToCart={addToCart} successMessage={ successMessage} />} />
          <Route path="/terror" element={<Terror  cart={cart} addToCart={addToCart} successMessage={ successMessage} />} />
          <Route path="/carrito" element={<CarritoCompras cart={cart} addToCart={addToCart} successMessage={ successMessage}/>} />
        </Routes>
    </Router>
  );
};

export default App;