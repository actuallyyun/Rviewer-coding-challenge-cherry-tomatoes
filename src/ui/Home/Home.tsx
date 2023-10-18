import styles from './Home.module.css'
import { Search } from '../components/Search/Search'
import React, { useState, useEffect } from 'react'
import { Movie } from '../../domain/MovieType'
import Movies from '../components/Movies'
import { paginateMovies} from '../../domain/movie'
import Pagination from '../components/Pagination/Pagination'
import rviewerData from '../../domain/data.json'

export function Home(): React.ReactElement {
  const [movieData, setMovieData] = useState(rviewerData)
  const [currentPage, setCurrentPage] = useState(1)

  const [lastPage, setLastPage] = useState(0)

  const [movies, setMovies] = useState<Movie[]>([])

  useEffect(() => {
    try {
      const paginatedMovies = paginateMovies(
        movieData,
        currentPage,
        10,
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
  }, [currentPage, movieData])

  return (
    <div className={styles.home}>
      <Search setMovieData={setMovieData} />
      <div className={styles.contentWrapper}>
        <div className={styles.headingContainerLeft}>
          <p className={styles.headingLarge}>Popular Movies</p>
        </div>
        <Movies movies={movies} />
      </div>
      <Pagination
        currentPage={currentPage}
        lastPage={lastPage}
        maxLength={9}
        setCurrentPage={setCurrentPage}
      />
    </div>
  )
}
