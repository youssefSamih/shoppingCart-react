import { render } from '@testing-library/react';
import { ProductsGrid } from 'modules';
import data from 'mocks/data.json';

const products = data.slice(0, 1).map((val) => ({
  ...val,
  amount: 1,
}));

describe('HeaderUI', () => {
  test('should render the right contents', () => {
    const addToCart = jest.fn();
    const { getByTestId } = render(
      <ProductsGrid {...{ products, addToCart }} />
    );
    products.map((product) => {
      expect(getByTestId(`${product.id}`)).toBeTruthy();
    });
  });
});
