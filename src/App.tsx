import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import { CartProvider, Products, ShoppingCart } from 'modules';

const App: React.FunctionComponent = () => (
  <CartProvider>
    <BrowserRouter>
      <Switch>
        <Route exact path="/products" component={Products} />
        <Route exact path="/cart" component={ShoppingCart} />
        <Route component={Products} />
      </Switch>
    </BrowserRouter>
  </CartProvider>
);

export default App;
