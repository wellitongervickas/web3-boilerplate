import type { ReactNode } from 'react'
import { useEffect, useState, useCallback } from 'react'
import { XMarkIcon } from '@heroicons/react/24/solid'

import classnames from '@modules/utils/classnames'

interface ModalProps {
  isOpen: boolean
  children: ReactNode
  setIsOpen: (status: boolean) => void
}

const Modal = ({ children, setIsOpen, isOpen }: ModalProps) => {
  const [isBoxOpen, setIsBoxOpen] = useState(false)

  const doChangeBoxOpened = useCallback(setIsOpen, [setIsOpen])

  useEffect(() => {
    const time = setTimeout(() => {
      setIsBoxOpen(isOpen)
    }, 100) // delay of animation box entering

    return () => {
      setIsBoxOpen(false)
      clearTimeout(time)
    }
  }, [isOpen])

  return (
    <div
      hidden={!isOpen}
      className={classnames.merge([
        'absolute right-0 top-0 bottom-0 left-0 z-[1000] ',
        'h-full w-full bg-black bg-opacity-30',
        'flex items-center justify-center',
        ' transition-all duration-300 ',
        isOpen ? 'visible' : 'invisible'
      ])}
    >
      <div
        className={classnames.merge([
          'relative z-[98] bg-white',
          'h-screen min-h-[60px] w-screen min-w-[60px] md:h-auto md:w-auto',
          'transform transition-all duration-300 md:rounded-md lg:mx-0',
          isBoxOpen ? 'opacity-100' : 'opacity-0'
        ])}
      >
        <button
          aria-label='Close Modal'
          type='button'
          className='absolute top-3 right-4 md:-top-8 md:right-0'
          onClick={() => setIsOpen(false)}
        >
          <XMarkIcon
            title='close'
            width={24}
            className='text-neutral-700 md:text-neutral-200'
          />
        </button>
        <div>{children}</div>
      </div>
      <div
        className={classnames.merge([
          'absolute right-0 top-0 bottom-0 left-0 z-[97]',
          'h-full w-full bg-blue-900 bg-opacity-30 blur-[99%]'
        ])}
        onClick={() => doChangeBoxOpened(false)}
      />
    </div>
  )
}

export default Modal
