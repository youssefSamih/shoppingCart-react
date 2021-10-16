import { render } from '@testing-library/react';
import { Products } from 'modules';
import data from 'mocks/data.json';

describe('HeaderUI', () => {
  test('should render the right contents', () => {
    const { getByTestId } = render(<Products />);
    data.splice(0, 54).map((val) => {
      expect(getByTestId(val.id)).toBeTruthy();
    });
  });
});
