import { render } from '@testing-library/react';
import { Item } from 'modules';
import data from 'mocks/data.json';

const itemId = 1;

const item = {
  ...data.find((val) => val.id === itemId)!,
  amount: 1,
};

describe('HeaderUI', () => {
  test('should render the right contents', () => {
    const { getByTestId, getByText } = render(<Item {...{ item }} />);
    expect(getByTestId(`${itemId}`)).toBeTruthy();
    expect(getByText(item.title)).toBeTruthy();
  });

  test('should render the right contents as cartItem', () => {
    const { getByTestId } = render(<Item {...{ item }} showAsCartItem />);
    expect(getByTestId('increase-decrease-button')).toBeTruthy();
  });
});
