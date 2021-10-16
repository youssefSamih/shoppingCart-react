import React from 'react';
import { Header } from 'ui';
import { CartItemType, ProductsGrid, Wrapper, useHandleCart } from 'modules';
import data from 'mocks/data.json';

const products = data as unknown as Array<CartItemType>;

export const Products: React.FunctionComponent = () => {
  const { cartItems, getTotalItems, addToCart } = useHandleCart();

  return (
    <Wrapper>
      <Header {...{ cartItems, getTotalItems }} />
      <ProductsGrid {...{ products, addToCart }} />
    </Wrapper>
  );
};
