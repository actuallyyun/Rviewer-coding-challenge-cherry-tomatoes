import { render, screen } from '@testing-library/react'
import Footer from './Footer'

test('Footer render the elements', () => {
  render(<Footer />)
  const footer = screen.getByRole('contentinfo')
  expect(footer).toBeInTheDocument()
  const icons = [
    'Cherry tomatoes icon',
    'apple store logo',
    'google play logo',
    'Cherry tomatoes logo text'
  ]
  icons.forEach((icon) => {
    expect(screen.getByAltText(icon)).toBeInTheDocument()
  })
  const copyrightText = screen.getByText(
    '© Copyright 2022 Dreadful Tomatoes. All rights reserved.'
  )
  expect(copyrightText).toBeInTheDocument()
})
