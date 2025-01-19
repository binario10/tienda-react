import { useState } from "react";

const useAddToCart = (initialCart = []) => {


  const [cart, setCart] = useState(initialCart);
  const [successMessage, setSuccessMessage] = useState(""); // Nuevo estado para confirmacion

  const addToCart = (product) => {

        //sin callback quedaria asi
       //setCart([...cart, { ...product, quantity: 1 }]);

       //con callback precCart para mejorar las sincronizacion
      setCart( (prevCart) => {
      // Comprobar si el producto ya está en el carrito
      const existingProduct = prevCart.find((item) => item.id === product.id);

      if (existingProduct) {

       // alert("El LIbro ya existe!!!");

        // Si el producto ya está, incrementa su cantidad
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        // Si el producto no está, lo agrega al carrito
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });        
    
    // Establecer mensaje de éxito
    setSuccessMessage(`${product.name} se ha añadido al carrito.`);

    // Limpiar mensaje después de 3 segundos
    setTimeout(() => setSuccessMessage(""), 3000);

  };
  

  return { cart, addToCart, successMessage };
};

export default useAddToCart;
