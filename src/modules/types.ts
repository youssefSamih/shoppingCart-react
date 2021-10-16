export interface SharedProps {
  addToCart(clickedItem: CartItemType): void;
  removeFromCart?(id: number): void;
  showAsCartItem?: boolean;
}

export interface CartItemType {
  id: number;
  category: string;
  description: string;
  image: string;
  price: number;
  title: string;
  amount: number;
}

export type Nullable<T> = T | null;
