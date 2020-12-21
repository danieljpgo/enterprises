import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import MockThemeProvider from '../../../utils/tests/MockThemeProvider';
import Button from '..';

test('should not be possible to call onClick when the button is disabled', () => {
  const handleClick = jest.fn();
  render(
    <MockThemeProvider>
      <Button
        disabled
        onClick={handleClick}
      />
    </MockThemeProvider>,
  );

  userEvent.click(screen.getByRole('button'));
  expect(handleClick).toBeCalledTimes(0);
});

test('should call onClick when the button is clicked', () => {
  const handleClick = jest.fn();
  render(
    <MockThemeProvider>
      <Button onClick={handleClick} />
    </MockThemeProvider>,
  );

  userEvent.click(screen.getByRole('button'));
  expect(handleClick).toBeCalledTimes(1);
});
