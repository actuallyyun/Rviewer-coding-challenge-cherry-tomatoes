import styles from './Home.module.css'
import { Search } from '../components/Search/Search'
import React from 'react'
import Movies from '../components/Movies'
import Pagination from '../components/Pagination/Pagination'
import useMovies from '../../hooks/useMovies'

const ITEMS_PER_PAGE = 10

export function Home(): React.ReactElement {
  const { movie, pagination, search } = useMovies(ITEMS_PER_PAGE)

  const handleTitleSearch = (e) => {
    search.setSearchTitle(e.target.value)
  }

  return (
    <div className={styles.home}>
      <Search value={search.title} onChange={handleTitleSearch} />
      <div className={styles.contentWrapper}>
        <div className={styles.headingContainerLeft}>
          <p className={styles.headingLarge}>Popular Movies</p>
        </div>
        <Movies movies={movie.movies} />
      </div>
      <Pagination
        currentPage={pagination.currentPage}
        lastPage={pagination.lastPage}
        maxLength={9}
        setCurrentPage={pagination.setCurrentPage}
      />
    </div>
  )
}
