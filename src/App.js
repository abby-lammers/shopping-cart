import React, { useEffect, useState } from 'react';
import 'rbx/index.css';
import { Container, Card, Content, Image, Column, Group } from 'rbx';

const ProductCards = ({ products }) => {
  const cards = products.map(product => {
    return (
      <Column key={product.sku} size={3}>
        <Card>
          <Card.Image>
            <Image.Container size="2by3">
              <Image src={`./data/products/${product.sku}_1.jpg`} />
            </Image.Container>
          </Card.Image>
          <Card.Content>
            <Content>
              {product.title}
            </Content>
          </Card.Content>
        </Card>
      </Column>
    )
  });

  return (
    <Column.Group multiline>
      {cards}
    </Column.Group>
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