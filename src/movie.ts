export type MovieTitle = string
export type MovieDescription = string
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
