import { useState } from 'react'
import { Dispatch } from 'react'
import { SetStateAction } from 'react'
import { MovieData } from '../../../domain/MovieType'
import { filterMovieByTitle } from '../../../domain/movie'
import rviewerData from '../../../domain/data.json'
import styles from './Search.module.css'

export type SearchProps = {
  setMovieData: Dispatch<SetStateAction<MovieData>>
}

export function Search(props: SearchProps): JSX.Element {
  const [title, setTitle] = useState('')

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const filteredMovies = filterMovieByTitle(rviewerData, title)

    props.setMovieData(filteredMovies)
  }

  return (
    <div className={styles.searchContainer}>
      <div className={styles.searchGroup}>
        <img
          src='/images/search@2x.svg'
          className={styles.searchIcon}
          alt='search icon'
        />
        <form onSubmit={handleSubmit} className={styles.searchForm}>
          <input
            type='text'
            onChange={(event) => setTitle(event.target.value)}
            className={styles.searchInput}
            placeholder='Title'
            aria-label='title'
          />
        </form>
      </div>
    </div>
  )
}
