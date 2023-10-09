import { Movie, MovieTitle } from './MovieType'
import { MovieData } from './MovieType'

export type ErrorHandling = {
  error?: string
}

export type PaginatedMovies = {
  data: Movie[]
  meta: {
    current_page: number
    next_page: number | null
    pre_page: number | null
    total_count: number
    total_pages: number
  } | null
}

export function paginateMovies(
  data: MovieData,
  page: number,
  perPage: number,
  sortBy: string,
  orderBy: string
): PaginatedMovies & ErrorHandling {
  const totalCount = data?.total

  // Validate per page number
  if (perPage < 1) {
    return { error: 'Invalid per page number.', data: [], meta: null }
  }

  const paginatedMovieData: { [key: number]: Movie[] } = {}
  let totalPages = 0

  if (perPage >= totalCount) {
    paginatedMovieData[1] = data.entries
    totalPages = 1
  } else {
    // Sort data by perPage parameter, store it in a dictionary
    let thisPage = 1
    for (let lastPage = 1; lastPage <= totalCount; lastPage += perPage) {
      let startIndex = lastPage - 1
      let endIndex = Math.min(startIndex + perPage, totalCount)

      paginatedMovieData[thisPage] = data.entries.slice(startIndex, endIndex)
      thisPage += 1
    }
    totalPages = Object.keys(paginatedMovieData).length
  }

  // Validate page number
  if (page < 1 || page > totalPages) {
    return { error: 'Invalid page number.', data: [], meta: null }
  }
  if (sortBy === 'releaseYear') {
    try {
      sortMovieByYear(paginatedMovieData[page], orderBy)
    } catch (err) {
      if (err instanceof Error) {
        return { error: err.message, data: [], meta: null }
      }
    }
  }

  return {
    data: paginatedMovieData[page],
    meta: {
      current_page: page,
      next_page: page === totalPages ? null : page + 1,
      pre_page: page === 1 ? null : page - 1,
      total_count: totalCount,
      total_pages: totalPages
    }
  }
}

export function sortMovieByYear(
  movies: Movie[],
  orderBy: string
): Movie[] | ErrorConstructor {
  if (orderBy === 'ASC') {
    return movies.sort((a, b) => a.releaseYear - b.releaseYear)
  } else if (orderBy === 'DES') {
    return movies.sort((a, b) => b.releaseYear - a.releaseYear)
  } else {
    throw new Error(`Invalid sorting method ${orderBy}.`)
  }
}

export function filterMovieByTitle(movieData, title: MovieTitle): MovieData {
  const filteredEntries = movieData.entries.filter((movie) =>
    movie.title.toLowerCase().includes(title.toLowerCase())
  )
  return {
    total: filteredEntries.length,
    entries: filteredEntries
  }
}
