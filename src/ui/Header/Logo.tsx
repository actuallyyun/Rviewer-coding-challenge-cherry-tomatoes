import styles from './Header.module.css'
import logo from './iso.svg'

export function LogoGroup({ width }) {
  return (
    <div className={styles.logoGroup}>
      <img
        width={width}
        src='/images/cherry-tomatoes-icon.svg'
        className={styles.logoIcon}
        alt='Cherry tomatoes icon'
      />
      <img
        width={width}
        src='/images/cherry-tomatoes-text.svg'
        className={styles.logoText}
        alt='Cherry tomatoes logo text'
      />
    </div>
  )
}
