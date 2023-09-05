import { type } from 'os'

export type MovieTitle = string
export type MovieDescription = string
export interface PageNumber {
  pageNumber: number
}
export type MoviePosterArt = {
  url: string
  width: number
  height: number
}
export type MovieImage = {
  posterArt: MoviePosterArt
}

export type Movie = {
  id: string
  title: MovieTitle
  images: MovieImage
  description: MovieDescription
  releaseYear: number
}

export interface MovieData {
  total: number
  entries: Movie[]
}

export type PaginatedMovieData = MovieData & PageNumber

export function paginateMovies(movieData: MovieData): PaginatedMovieData[] {
  const result: PaginatedMovieData[] = []
  let pageNumber = 0
  let total = movieData.total
  let start = 0
  let end = 0
  let entries: Movie[] = []
  while (total > 0) {
    pageNumber += 1
    end = total > 10 ? (end += 10) : (end += total)
    entries = movieData.entries.slice(start, end)

    result.push({
      total: end - start,
      entries: entries,
      pageNumber: pageNumber
    })
    start = end
    total -= end
  }
  return result
}

export function sortMovieByYear(movies: Movie[]): Movie[] {
  return movies.sort((a, b) => a.releaseYear - b.releaseYear)
}

export function filterMovieByTitle(
  movieData: MovieData,
  title: MovieTitle
): Movie[] {
  return movieData.entries.filter((movie) => movie.title.includes(title))
}
