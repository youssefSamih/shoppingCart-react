import {
  addItemtoCart,
  CartItemType,
  removeItemFromCart,
  useCart,
} from 'modules';

export const useHandleCart = () => {
  const { state: cartItems, dispatch } = useCart();

  const getTotalItems = (items: Array<CartItemType>) =>
    items.reduce((acc: number, item) => acc + item.amount, 0);

  const addToCart = (clickedItem: CartItemType) =>
    addItemtoCart(dispatch, clickedItem);

  const handleRemoveFromCart = (id: number) => removeItemFromCart(dispatch, id);

  return {
    cartItems,
    getTotalItems,
    addToCart,
    handleRemoveFromCart,
  };
};
