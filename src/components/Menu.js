import React from "react";
import { Link } from "react-router-dom";

import "../styles/menu.css";

const Menu = () => {
  return (
    
    <nav className="menu">
    <ul className="menu__list">
      <li className="menu__item"><Link to="/" className="menu__link">Inicio</Link></li>
      <li className="menu__item"><Link to="/dramaticos" className="menu__link">Dramáticos</Link></li>
      <li className="menu__item"><Link to="/comedias" className="menu__link">Comedias</Link></li>
      <li className="menu__item"><Link to="/misterio" className="menu__link">Misterio</Link></li>
      <li className="menu__item"><Link to="/terror" className="menu__link">Terror</Link></li>
      <li className="menu__item">
        <Link to="/contacto" className="menu__link"> 
        <span class="material-symbols-outlined">shopping_cart</span>
        </Link>
</li>
    </ul>
  </nav>
  );
};

export default Menu;
