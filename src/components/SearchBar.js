import React from "react";
import "../styles/search-bar.css"; // Importa los estilos del buscador

const SearchBar = () => {
  return (
    <div className="search-bar">
      <input type="text" placeholder="Buscar productos..." onKeyDownCapture={() => alert("Aun no sirve el buscador profe") } />
    </div>
  );
};

export default SearchBar;
