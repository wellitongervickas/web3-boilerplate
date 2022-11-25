import { ReactNode } from 'react'
import Header from '@components/shared/Header'
import classnames from '@modules/utils/classnames'

interface LayoutDefaultProps {
  children: ReactNode
}

export const LayoutDefault = ({ children }: LayoutDefaultProps) => {
  return (
    <div
      className={classnames.merge([
        'flex h-screen flex-col bg-neutral-800 text-neutral-200'
      ])}
    >
      <Header />
      <main className='flex-1'>
        <div className='py-5 container'>{children}</div>
      </main>
    </div>
  )
}

export default LayoutDefault
