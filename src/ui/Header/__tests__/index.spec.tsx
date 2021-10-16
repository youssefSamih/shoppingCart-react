import { render } from '@testing-library/react';
import { Header } from 'ui';
import type { CartItemType } from 'modules';
import data from 'mocks/data.json';

const totalItems = 3;

const cartItems = data.splice(0, totalItems).map((val) => ({
  ...val,
  amount: 1,
}));

describe('HeaderUI', () => {
  test('should render the right contents', () => {
    const getTotalItems = (items: Array<CartItemType>) =>
      items.reduce((acc: number, item) => acc + item.amount, 0);
    const { getByTestId } = render(
      <Header {...{ cartItems, getTotalItems }} />
    );
    expect(getByTestId('product-link')).toBeTruthy();
    expect(getByTestId('badge').textContent).toEqual(`${totalItems}`);
  });
});
