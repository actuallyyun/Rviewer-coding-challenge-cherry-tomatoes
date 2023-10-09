import Movies, { MoviesProps } from './Movies'
import { render, screen } from '@testing-library/react'

describe('Renders movies conditionally', () => {
  const renderComponent = (movies) => {
    return render(<Movies movies={movies} />)
  }
  it('Show message when there is no movie', () => {
    renderComponent([])
    const message = screen.getByText('No movie found')
    expect(message).toBeInTheDocument()
  })
  it('Show one movie', () => {
    const movies = [
      {
        title: 'American History X',
        description:
          'A former neo-nazi skinhead tries to prevent his younger brother from going down the same wrong path that he did.',
        images: {
          posterArt: {
            url: 'https://static.rviewer.io/challenges/datasets/dreadful-cherry-tomatoes/assets/american_history_x.jpg',
            width: 497,
            height: 736
          }
        },
        releaseYear: 1998
      }
    ]
    renderComponent(movies)
    const movie = screen.getAllByText('American History X')
    expect(movie?.length).toBe(2)
    const description = screen.getByText(
      'A former neo-nazi skinhead tries to prevent his younger brother from going down the same wrong path that he did.'
    )
    expect(description).toBeInTheDocument()
  })
})
