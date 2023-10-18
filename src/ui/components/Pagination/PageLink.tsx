import { HTMLProps } from 'react'
import cn from 'classnames'
import './PageLink.css'

export type Props = HTMLProps<HTMLAnchorElement> & { active?: boolean } & {
  disabled?: boolean
}

export default function PageLink({
  active,
  disabled,
  children,
  ...otherProps
}: Props) {
  const customClassName = cn('page-link', { active, disabled })
  if (disabled) {
    return <span className={customClassName}>{children}</span>
  }

  return (
    <a className={customClassName} {...otherProps} href='#'>
      {children}
    </a>
  )
}
