import { render, screen } from '@testing-library/react';
import Game from './Components/Game';

test('renders Minesweeper header', () => {
  render(<Game />);
  const header = screen.getByText(/Minesweeper/i);
  expect(header).toBeInTheDocument();
});
test('renders mine count>', () => {
  render(<Game />);
  const mineCount = screen.getByText(/Mines remaining/i);
  expect(mineCount).toBeInTheDocument();
});
test('renders game status', () => {
  render(<Game />);
  const stat = screen.getByText(/Game in progress/);
  expect(stat).toBeInTheDocument();
});
// test('renders Minesweeper header', () => {
//   render(<Game />);
//   const header = screen.getByText(/Minesweeper/i);
//   expect(header).toBeInTheDocument();
// });
// test('renders Minesweeper header', () => {
//   render(<Game />);
//   const header = screen.getByText(/Minesweeper/i);
//   expect(header).toBeInTheDocument();
// });
// test('renders Minesweeper header', () => {
//   render(<Game />);
//   const header = screen.getByText(/Minesweeper/i);
//   expect(header).toBeInTheDocument();
// });