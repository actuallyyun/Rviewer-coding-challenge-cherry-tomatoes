import { FormEvent } from 'react'
import styles from './Search.module.css'

export type SearchProps = {
  value: string
  onChange: (e: FormEvent<HTMLInputElement>) => void
}

export function Search({ value, onChange }: SearchProps): JSX.Element {
  return (
    <div className={styles.searchContainer}>
      <div className={styles.searchGroup}>
        <img
          src='/images/search@2x.svg'
          className={styles.searchIcon}
          alt='search icon'
        />
        <div className={styles.searchForm}>
          <input
            type='text'
            value={value}
            onChange={onChange}
            className={styles.searchInput}
            placeholder='Title'
            aria-label='title'
          />
        </div>
      </div>
    </div>
  )
}
