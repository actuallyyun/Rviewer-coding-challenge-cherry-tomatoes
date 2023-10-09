import { Movie } from '../../domain/MovieType'
import styles from './Movies.module.css'

export default function MovieCard({ movie }: { movie: Movie }): JSX.Element {
  return (
    <div className={styles.cardContainer}>
      <img src={movie.images.posterArt.url} className={styles.moviePoster} />
      <div className={styles.cardOverlay}>
        <div className={styles.overlayTitleWrapper}>
          <p className={styles.overlayTitle}>{movie.title}</p>
        </div>
        <div className={styles.hoverContent}>
          <p className={styles.headingS}>{movie.title}</p>
          <p className={styles.textS}>{movie.releaseYear}</p>
          <p className={styles.textS}>{movie.description}</p>
        </div>
      </div>
    </div>
  )
}
