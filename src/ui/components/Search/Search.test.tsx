//import { render, screen } from '@testing-library/react'
//import { Search } from './Search'
//import userEvent from '@testing-library/user-event'

//test('Input is set to empty string', () => {
//  const setMovieData = jest.fn()
//  render(<Search setMovieData={setMovieData} />)
//  const input = screen.getByRole('textbox')
//  expect(input).toHaveValue('')
//})

//test('Input value is updated correctly', async () => {
//  const user = userEvent.setup()
//  const setMovieData = jest.fn()
//  render(<Search setMovieData={setMovieData} />)
//  const input = screen.getByRole('textbox')
//  await user.click(input)
//  await user.keyboard('america{Enter}')
//  expect(input).toHaveValue('america')
//})
