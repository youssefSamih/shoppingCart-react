import React from 'react';
import { useHistory } from 'react-router-dom';
import AddShoppingCart from '@material-ui/icons/AddShoppingCart';
import IconButton from '@material-ui/core/IconButton';
import Toolbar from '@material-ui/core/Toolbar';
import AppBar from '@material-ui/core/AppBar';
import Badge from '@material-ui/core/Badge';
import Button from '@material-ui/core/Button';
import { CartItemType } from 'modules';

interface HeaderProps {
  cartItems: Array<CartItemType>;
  getTotalItems(cartItems: Array<CartItemType>): number;
}

export const Header: React.FunctionComponent<HeaderProps> = ({
  cartItems,
  getTotalItems,
}) => {
  const history = useHistory();

  return (
    <AppBar position="fixed" color="inherit">
      <Toolbar>
        <IconButton onClick={() => history.push('/cart')}>
          <Badge badgeContent={getTotalItems(cartItems)} color="error">
            <AddShoppingCart />
          </Badge>
        </IconButton>
        <Button onClick={() => history.push('/products')} color="inherit">
          Products
        </Button>
      </Toolbar>
    </AppBar>
  );
};
