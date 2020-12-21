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

test('should onChange return a trim term', () => {
  const handleChange = jest.fn();
  render(
    <MockThemeProvider>
      <SearchField
        value=""
        trimTerm
        debounceTime={1200}
        placeholder="search"
        onChange={handleChange}
      />
    </MockThemeProvider>,
  );

  userEvent.type((screen.getByPlaceholderText(/search/i)), '     search test     ');

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
  expect(handleChange).toHaveBeenCalledWith({ target: { value: 'search test' } });
});

test('should onChange return a empty value after click on clear button', () => {
  const handleChange = jest.fn();
  render(
    <MockThemeProvider>
      <SearchField
        value="my search"
        trimTerm
        debounceTime={1200}
        placeholder="search"
        onChange={handleChange}
      />
    </MockThemeProvider>,
  );

  expect(screen.getByPlaceholderText(/search/i)).toHaveValue('my search');

  userEvent.click(screen.getByRole('button'));

  act(() => {
    jest.advanceTimersByTime(1200);
  });
  expect(screen.getByPlaceholderText(/search/i)).toHaveValue('');
});
