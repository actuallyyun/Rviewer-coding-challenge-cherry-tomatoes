import { LogoGroup } from '../Header/Logo'
import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer>
      <div className={styles.footerContainer}>
        <div className={styles.footerLogoContainer}>
          <LogoGroup width={80} />
        </div>
        <div className={styles.storeButtonGroup}>
          <img src='/images/app store@2x.svg' alt='apple store logo' />
          <img src='/images/google play@2x.svg' alt='google play logo' />
        </div>
        <div className={styles.copyrightWrapper}>
          <small className={styles.copyrightText}>
            © Copyright 2022 Dreadful Tomatoes. All rights reserved.
          </small>
        </div>
      </div>
    </footer>
  )
}
