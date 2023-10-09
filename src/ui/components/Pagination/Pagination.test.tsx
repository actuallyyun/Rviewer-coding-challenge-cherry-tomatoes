import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Pagination, { Props } from './Pagination'

const renderComponent = ({ ...props }: Props) => {
  return render(<Pagination {...props} />)
}

test('Renders elements', () => {
  const props = {
    currentPage: 1,
    lastPage: 3,
    maxLength: 7,
    setCurrentPage: jest.fn()
  }
  renderComponent(props)
  const activeLinks = screen.getAllByRole('link')
  expect(activeLinks?.length).toBe(4)
  for (let i = 0; i < 3; i++) {
    expect(activeLinks[i]?.innerHTML).toBe(`${i + 1}`)
  }
})
