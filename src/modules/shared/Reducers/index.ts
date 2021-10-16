import { CartItemType } from 'modules';

export const INITIAL_STATE = [];

export enum CartActions {
  ADD_TO_CART = 'ADD_TO_CART',
  REMOVE_FROM_CART = 'REMOVE_FROM_CART',
}

export type CartType =
  | {
      type: CartActions.ADD_TO_CART;
      item: CartItemType;
    }
  | {
      type: CartActions.REMOVE_FROM_CART;
      id: number;
    };

export const cartReducer = (state: Array<CartItemType>, action: CartType) => {
  switch (action.type) {
    case CartActions.ADD_TO_CART: {
      const isItemInCart = state.find((item) => item.id === action.item.id);

      if (isItemInCart) {
        return state.map((item) =>
          item.id === action.item.id
            ? { ...item, amount: item.amount + 1 }
            : item
        );
      }
      return [...state, { ...action.item, amount: 1 }];
    }

    case CartActions.REMOVE_FROM_CART: {
      return state.reduce((acc, item) => {
        if (item.id === action.id) {
          if (item.amount === 1) return acc;
          return [...acc, { ...item, amount: item.amount - 1 }];
        }
        return [...acc, item];
      }, [] as Array<CartItemType>);
    }

    default:
      return state;
  }
};
