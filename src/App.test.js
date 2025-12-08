import { render, screen } from '@testing-library/react';
import App from './App';

test('renders without crashing', () => {
  render(<App />);
});

test('renders quote component', () => {
  render(<App />);
  const quoteElement = document.querySelector('.Quote');
  expect(quoteElement).toBeInTheDocument();
});

test('renders buttons', () => {
  render(<App />);
  const buttons = document.querySelectorAll('.Button');
  expect(buttons.length).toBe(2);
});
