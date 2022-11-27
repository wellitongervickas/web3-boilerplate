import { useState, useCallback, useEffect } from 'react'
import { useRouter } from 'next/router'
import { XMarkIcon, Bars3Icon } from '@heroicons/react/24/solid'

import NavMain from '@components/shared/Nav/Main'
import classnames from '@modules/utils/classnames'
import WalletConnect from '@components/shared/Wallet/Connect'

const Navbar = () => {
  const [open, setOpen] = useState(false)
  const route = useRouter()

  const doToggleMenu = useCallback(
    (preventReOpen?: boolean) => {
      if (preventReOpen && !open) {
        return
      }

      setOpen(!open)
    },
    [setOpen, open]
  )

  useEffect(() => {
    const preventReOpen = true
    route.events.on('routeChangeStart', () => doToggleMenu(preventReOpen))
  }, [doToggleMenu, route])

  return (
    <div>
      <div className='md:hidden'>
        <Bars3Icon
          onClick={() => doToggleMenu()}
          width={24}
          className='cursor-pointer'
        />
      </div>
      <nav className='hidden md:block'>
        <NavMain className='flex space-x-4' />
      </nav>
      <nav
        className={classnames.merge([
          'md:hidden',
          {
            'invisible relative overflow-hidden': !open,
            visible: open
          }
        ])}
      >
        <div className='absolute top-0 left-0 z-[99] h-screen w-screen bg-black/60' />
        <div
          className={classnames.merge([
            open ? 'left-0' : 'left-full',
            'fixed top-0 z-[99] transition-all duration-300',
            'right-0 h-screen w-screen bg-neutral-700 p-12 shadow md:hidden',
            'flex flex-col justify-between'
          ])}
        >
          <div className='flex flex-col space-y-6'>
            <div className='relative flex justify-end'>
              <span
                className='absolute -top-8 -right-8 cursor-pointer text-lg'
                onClick={() => doToggleMenu()}
              >
                <XMarkIcon
                  title='close'
                  width={24}
                  className='text-neutral-200'
                />
              </span>
            </div>
            <NavMain className='flex flex-col space-y-6 ' />
          </div>
          <WalletConnect />
        </div>
      </nav>
    </div>
  )
}

export default Navbar
