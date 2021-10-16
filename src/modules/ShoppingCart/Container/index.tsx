import React from 'react';
import { Header, ProductsGrid, useHandleCart, Wrapper } from 'modules';

export const ShoppingCart: React.FunctionComponent = () => {
  const { cartItems, handleRemoveFromCart, getTotalItems, addToCart } =
    useHandleCart();

  return (
    <Wrapper>
      <Header {...{ cartItems, getTotalItems }} />
      <ProductsGrid
        showAsCartItem
        removeFromCart={handleRemoveFromCart}
        products={cartItems}
        {...{ addToCart }}
      />
    </Wrapper>
  );
};
