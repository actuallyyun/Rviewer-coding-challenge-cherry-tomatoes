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
