import React from 'react';
import { CartActions, CartItemType, CartType } from 'modules';

export const addItemtoCart = (
  dispatch: React.Dispatch<CartType>,
  item: CartItemType
) => dispatch({ type: CartActions.ADD_TO_CART, item });

export const removeItemFromCart = (
  dispatch: React.Dispatch<CartType>,
  id: number
) => dispatch({ type: CartActions.REMOVE_FROM_CART, id });
