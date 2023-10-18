import { useState, useEffect } from 'react'
import rviewerData from '../domain/data.json'
import { Movie } from '../domain/MovieType'
import { paginateMovies } from '../domain/movie'
import { filterMovieByTitle } from '../domain/movie'

export default function useMovies(perPage: number) {
  const [movieData, setMovieData] = useState(rviewerData)
  const [currentPage, setCurrentPage] = useState(1)
  const [lastPage, setLastPage] = useState(0)
  const [movies, setMovies] = useState<Movie[]>([])
  const [searchTitle, setSearchTitle] = useState('')

  useEffect(() => {
    const searchedMovies = filterMovieByTitle(movieData, searchTitle)

    try {
      const paginatedMovies = paginateMovies(
        searchedMovies,
        currentPage,
        perPage,
        'releaseYear',
        'ASC'
      )
      const lastPage = paginatedMovies.meta?.total_pages
      if (lastPage != undefined) {
        setLastPage(lastPage)
      }

      setMovies(paginatedMovies.data)
    } catch (err) {
      if (err instanceof Error) {
        console.log(err.message)
      }
    }
  }, [currentPage, movieData, searchTitle])

  return {
    pagination: {
      currentPage: currentPage,
      setCurrentPage: setCurrentPage,
      lastPage: lastPage
    },
    movie: {
      movies: movies,
      setMovieData: setMovieData
    },
    search: {
      title: searchTitle,
      setSearchTitle: setSearchTitle
    }
  }
}
