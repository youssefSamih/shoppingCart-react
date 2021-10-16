import { CartItemType, cartReducer, CartType, INITIAL_STATE } from 'modules';
import React from 'react';

export const CartContext = React.createContext<{
  state: Array<CartItemType>;
  dispatch: React.Dispatch<CartType>;
}>({
  state: INITIAL_STATE,
  dispatch: () => {},
});

export const CartProvider: React.FunctionComponent = ({ children }) => {
  const [state, dispatch] = React.useReducer(cartReducer, INITIAL_STATE);

  return (
    <CartContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => React.useContext(CartContext);
