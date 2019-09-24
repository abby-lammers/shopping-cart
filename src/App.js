import React, { useEffect, useState } from 'react';
import 'rbx/index.css';
import { Container, Card, Content } from 'rbx';

const ProductCards = ({ products }) => {
  const card = products.map(product => {
    return (
      <Card key={product.sku}>
        <Card.Content>
          <Content>
            {product.title}
          </Content>
        </Card.Content>
      </Card>
    )
  });
  return(
    <React.Fragment>{ card }</React.Fragment>
  );
};

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
    <Container>
      <ProductCards products={products} />
    </Container>
  );
};

export default App;