import { faker } from '@faker-js/faker'
import { render, screen } from '@testing-library/react'
import PageLink, { Props } from './PageLink'

describe('<PageLink />', () => {
  const renderComponent = ({ children, ...props }: Props) => {
    return render(<PageLink {...props}>{children}</PageLink>)
  }
  it('It should render anchor element by default', () => {
    const text = faker.lorem.sentence()
    renderComponent({ children: text })

    const el = screen.queryByText(text)
    expect(el?.tagName).toBe('A')
  })
  it('Should accept classname props', () => {
    const text = faker.lorem.sentence()
    const className = faker.word.noun()

    renderComponent({ className, children: text })

    const el = screen.queryByText(text)
    expect(el).toHaveClass(className)
    expect(el).not.toHaveClass('active disabled')
  })
  it('Should accept active props', () => {
    const text = faker.lorem.sentence()

    renderComponent({ children: text, active: true })

    const el = screen.queryByText(text)

    expect(el).toHaveClass('active')
  })

  it('Should accept disabled props', () => {
    const text = faker.lorem.sentence()

    renderComponent({ children: text, disabled: true })

    const el = screen.queryByText(text)

    expect(el).toHaveClass('disabled')
    expect(el?.tagName).toBe('SPAN')
  })
})
