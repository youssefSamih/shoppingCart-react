import React from 'react';
import Grid from '@material-ui/core/Grid';
import { Item, CartItemType, SharedProps } from 'modules';
import { GridContainer, Container } from './style';

type ProductsGridProps = SharedProps & {
  products: Array<CartItemType>;
};

const calculateTotal = (items: Array<CartItemType>) =>
  items.reduce((acc: number, item) => acc + item.amount * item.price, 0);

export const ProductsGrid: React.FunctionComponent<ProductsGridProps> = ({
  products,
  showAsCartItem,
  addToCart,
  removeFromCart,
}) => (
  <GridContainer>
    <Container>
      <Grid container spacing={3}>
        {products?.map((item) => (
          <Grid item key={item.id} xs={12} sm={4}>
            <Item {...{ item, addToCart, removeFromCart, showAsCartItem }} />
          </Grid>
        ))}
      </Grid>
      <div>
        {products.length === 0 ? <p>No items found</p> : null}
        {showAsCartItem && (
          <h2>Total: ${calculateTotal(products).toFixed(2)}</h2>
        )}
      </div>
    </Container>
  </GridContainer>
);
