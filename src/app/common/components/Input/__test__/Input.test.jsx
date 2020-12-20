import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Input from '..';
import MockThemeProvider from '../../../utils/tests/MockThemeProvider';

test('should call onChange after user type', () => {
  const handleChange = jest.fn();
  render(
    <MockThemeProvider>
      <Input
        placeholder="name"
        onChange={handleChange}
      />
    </MockThemeProvider>,
  );

  userEvent.type(screen.getByPlaceholderText(/name/i), 'daniel');

  expect(handleChange).toBeCalledTimes(6);
});

test('should call onChange after user type', () => {
  const handleChange = jest.fn();
  render(
    <MockThemeProvider>
      <Input
        value="daniel"
        placeholder="name"
        onChange={handleChange}
      />
    </MockThemeProvider>,
  );

  const input = screen.getByDisplayValue(/daniel/i);
  expect(input).toHaveValue('daniel');
});

test('should display error status when has error', () => {
  const handleChange = jest.fn();
  render(
    <MockThemeProvider>
      <Input
        status="error"
        placeholder="password"
        onChange={handleChange}
      />
    </MockThemeProvider>,
  );

  const errorStatus = screen.getByTestId('input-status-error');
  expect(errorStatus).toBeInTheDocument();
});

test('should display elements on adornments slots', () => {
  const handleChange = jest.fn();
  render(
    <MockThemeProvider>
      <Input
        startAdornment={<div>icon</div>}
        endAdornment={<button type="button">icon2</button>}
        placeholder="password"
        onChange={handleChange}
      />
    </MockThemeProvider>,
  );

  const icon = screen.getByText('icon');
  const button = screen.getByRole('button');
  expect(icon).toBeInTheDocument();
  expect(button).toBeInTheDocument();
});
