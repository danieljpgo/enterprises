import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import PasswordField from '..';
import MockThemeProvider from '../../../utils/tests/MockThemeProvider';

test('should change the input type on click see button', () => {
  const handleChange = jest.fn();
  render(
    <MockThemeProvider>
      <PasswordField
        value="123456"
        name="password"
        placeholder="password"
        onChange={handleChange}
      />
    </MockThemeProvider>,
  );

  expect(screen.queryByRole('textbox')).not.toBeInTheDocument();

  userEvent.click(screen.getByRole('button'));
  expect(screen.getByRole('textbox')).toBeInTheDocument();
});
