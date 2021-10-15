import React from 'react';
import { useQuery } from 'react-query';
import Grid from '@material-ui/core/Grid';
import Drawer from '@material-ui/core/Drawer';
import LinearProgress from '@material-ui/core/LinearProgress';
import AddShoppingCart from '@material-ui/icons/AddShoppingCart';
import Badge from '@material-ui/core/Badge';
import Item from 'Item/Item';
import { StyledButton, Wrapper } from 'App.styles';
import Cart from 'Cart/Cart';

export type CartItemType = {
  id: number;
  category: string;
  description: string;
  image: string;
  price: number;
  title: string;
  amount: number;
};

const getProducts = async (): Promise<Array<CartItemType>> =>
  await (await fetch('https://fakestoreapi.com/products')).json();

const App = () => {
  const [cartOpen, setCartOpen] = React.useState(false);
  const [cartItems, setCartItems] = React.useState<Array<CartItemType>>([]);
  const { data, isLoading, error } = useQuery<Array<CartItemType>>(
    'products',
    getProducts
  );

  const getTotalItems = (items: Array<CartItemType>) =>
    items.reduce((acc: number, item) => acc + item.amount, 0);

  const handleAddToCart = (clickedItem: CartItemType) => {
    setCartItems((prevState) => {
      const isItemInCart = prevState.find((item) => item.id === clickedItem.id);
      if (isItemInCart) {
        return prevState.map((item) =>
          item.id === clickedItem.id
            ? { ...item, amount: item.amount + 1 }
            : item
        );
      }
      return [...prevState, { ...clickedItem, amount: 1 }];
    });
  };

  const handleRemoveFromCart = (id: number) => {
    setCartItems((prevState) =>
      prevState.reduce((acc, item) => {
        if (item.id === id) {
          if (item.amount === 1) return acc;
          return [...acc, { ...item, amount: item.amount - 1 }];
        }
        return [...acc, item];
      }, [] as Array<CartItemType>)
    );
  };

  if (isLoading) return <LinearProgress />;
  if (error) return <div>Something went wrong</div>;

  return (
    <Wrapper>
      <Drawer anchor="right" open={cartOpen} onClose={() => setCartOpen(false)}>
        <Cart
          {...{ cartItems }}
          addToCart={handleAddToCart}
          removeFromCart={handleRemoveFromCart}
        />
      </Drawer>
      <StyledButton onClick={() => setCartOpen(true)}>
        <Badge badgeContent={getTotalItems(cartItems)} color="error">
          <AddShoppingCart />
        </Badge>
      </StyledButton>
      <Grid container spacing={3}>
        {data?.map((item) => (
          <Grid item key={item.id} xs={12} sm={4}>
            <Item {...{ item, handleAddToCart }} />
          </Grid>
        ))}
      </Grid>
    </Wrapper>
  );
};

export default App;
