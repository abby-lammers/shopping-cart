import React, { useEffect, useState } from 'react';
import 'rbx/index.css';
import { Button, Container, Card, Content, Image, Column, Title } from 'rbx';

// from original shopping cart app (https://github.com/jeffersonRibeiro/react-shopping-cart/blob/master/src/services/util.js)
export const formatPrice = (x, currency) => {
  switch (currency) {
    case 'BRL':
      return x.toFixed(2).replace('.', ',');
    default:
      return x.toFixed(2);
  }
};

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
              <h3>{product.title}</h3>
              <p>{product.style}</p>
              <b>${formatPrice(product.price, product.currencyId)}</b>
              <Button.Group>
                {product.availableSizes.map(size =>
                  <Button key={size}>{size}</Button>)}
              </Button.Group>
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
      <Title>Shopping Cart</Title>
      <ProductCards products={products} />
    </Container>
  );
};

export default App;