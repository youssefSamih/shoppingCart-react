import React from 'react';
import {
  CartItemType,
  Header,
  ProductsGrid,
  Wrapper,
  useHandleCart,
} from 'modules';
import data from '../data.json';

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
