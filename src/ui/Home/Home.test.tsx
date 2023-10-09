import { render, screen } from '@testing-library/react';
import { Home } from "./Home";
import exp from 'constants'

test('Home renders search section', () => {
  render(<Home />)
  const searchIcon = screen.getByAltText('search icon')
  expect(searchIcon).toBeInTheDocument()
  const input = screen.getByRole('textbox')
  expect(input).toBeInTheDocument()
})

test('Home renders movie section', () => {
  render(<Home />)
  const movieTitle = screen.getAllByText('Once Upon a Time in America')
  expect(movieTitle.length).toBe(2)
  const heading = screen.getByText('Popular Movies')
  expect(heading).toBeInTheDocument()
})

test('Home renders pagination section', () => {
  render(<Home />)
  const paginationNav = screen.getByLabelText('Pagination')
  expect(paginationNav).toBeInTheDocument()
})