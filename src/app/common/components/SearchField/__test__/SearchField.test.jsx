import {
  render, screen, act,
} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import MockThemeProvider from '../../../utils/tests/MockThemeProvider';
import SearchField from '..';

jest.useFakeTimers('modern');

test('should call onChange after debounce time', () => {
  const handleChange = jest.fn();
  render(
    <MockThemeProvider>
      <SearchField
        value=""
        debounceTime={1200}
        placeholder="search"
        onChange={handleChange}
      />
    </MockThemeProvider>,
  );

  userEvent.type((screen.getByPlaceholderText(/search/i)), 'daniel');

  expect(handleChange).toHaveBeenCalledWith({ target: { value: '' } });
  expect(handleChange).toHaveBeenCalledTimes(1);

  act(() => {
    jest.advanceTimersByTime(1199);
  });
  expect(handleChange).toHaveBeenCalledTimes(1);

  act(() => {
    jest.advanceTimersByTime(1);
  });
  expect(handleChange).toHaveBeenCalledTimes(2);
});
