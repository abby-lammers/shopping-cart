import React, { useEffect, useState} from 'react';

const App = () => {
  const [data, setData] = useState({}); // initialize data as an empty array with {}
  const products = Object.values(data);//Object.values(data); // creates an object, products, which holds data (products.json)
  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch('./data/products.json');
      const json = await response.json();
      setData(Object.values(json)[0]);
    };
    fetchProducts();
  }, []); // If the second arg is an empty list [], then the useEffect() function will only be called when the component is added (i.e., once).

  return (
    <ul>
      {products.map(product => <li key={product.sku}>{product.title}</li>)} 
    </ul>
  );
};

export default App;