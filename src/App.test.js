import { render, screen } from '@testing-library/react';
import App from './App';
/* import { DropDown } from './screens/DropDown/DropDown';
import { Menu } from './screens/Menu';
 */
test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
