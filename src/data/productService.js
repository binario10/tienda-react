import React from 'react'

export const getProducts = async () => {
  const response = await fetch('http://ec2-3-83-51-207.compute-1.amazonaws.com:8080/api/librery/libros');
  const products = await response.json();
  return products;
}


