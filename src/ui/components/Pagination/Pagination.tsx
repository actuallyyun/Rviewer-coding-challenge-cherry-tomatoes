import PageLink from './PageLink'
import { getPaginationItems } from '../../../domain/pagination'
import styles from './Pagination.module.css'

export type Props = {
  currentPage: number
  lastPage: number
  maxLength: number
  setCurrentPage: (page: number) => void
}

export default function Pagination({
  currentPage,
  lastPage,
  maxLength,
  setCurrentPage
}: Props) {
  const pageNums = getPaginationItems(currentPage, lastPage, maxLength)

  return (
    <nav aria-label='Pagination' className={styles.paginationNav}>
      <div className={styles.pageLinkWrapper}>
        <PageLink
          disabled={currentPage === 1}
          onClick={() => setCurrentPage(currentPage - 1)}
        >
          <img
            src='/images/left-chevron@2x.svg'
            alt='left chevron'
            className={styles.chevron}
          />
        </PageLink>
        {pageNums.map((pageNum, index) => (
          <PageLink
            key={index}
            active={currentPage === pageNum}
            onClick={() => setCurrentPage(pageNum)}
          >
            {isNaN(pageNum) ? '...' : pageNum}
          </PageLink>
        ))}
        <PageLink
          disabled={currentPage === lastPage}
          onClick={() => setCurrentPage(currentPage + 1)}
        >
          <img
            src='/images/right-chevron@2x.svg'
            alt='right chevron'
            className={styles.chevron}
          />
        </PageLink>
      </div>
    </nav>
  )
}
