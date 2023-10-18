import logo from './iso.svg'
import deadfulTomatoesLogo from './Dreadful Cherry Toma@2x.svg'
import styles from './Header.module.css'
import { LogoGroup } from './Logo'

export function Header() {
  return (
    <header className={styles.header}>
      <LogoGroup width={80} />
    </header>
  )
}

