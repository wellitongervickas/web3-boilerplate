import { ReactNode } from 'react'
import Header from '@components/shared/Header'
import classnames from '@modules/utils/classnames'

interface LayoutDefaultProps {
  children: ReactNode
  className?: string
}

export const LayoutDefault = ({ children, className }: LayoutDefaultProps) => {
  return (
    <div
      className={classnames.merge([
        className,
        ' overflow-y-auto text-neutral-200'
      ])}
    >
      <Header />
      <main>
        <div className='py-5 container'>{children}</div>
      </main>
    </div>
  )
}

export default LayoutDefault
