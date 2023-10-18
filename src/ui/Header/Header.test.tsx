import { render, screen } from '@testing-library/react';
import { Header } from "./Header";

test('Header renders logos', () => {
  render(<Header />)
  const logoIcon = screen.getByAltText('Cherry tomatoes icon')
  const logoText = screen.getByAltText('Cherry tomatoes logo text')
  expect(logoIcon).toBeInTheDocument()
  expect(logoText).toBeInTheDocument()
})
