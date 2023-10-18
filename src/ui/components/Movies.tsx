import { Movie } from '../../domain/MovieType'
import MovieCard from './MovieCard'
import styles from './Movies.module.css'

export type MoviesProps = {
  movies: Movie[]
}

export default function Movies({ movies }: MoviesProps): JSX.Element {
  const hasMovie: Boolean = movies?.length > 0 ? true : false
  return (
    <div className={styles.moviesWrapper}>
      {hasMovie &&
        movies.map((movie) => {
          return (
            <div className={styles.cardWrapper} key={movie.title}>
              <MovieCard movie={movie} />
            </div>
          )
        })}
      {!hasMovie && <p>No movie found</p>}
    </div>
  )
}
