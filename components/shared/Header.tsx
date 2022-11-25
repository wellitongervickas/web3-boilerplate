import classnames from '@modules/utils/classnames'
import Logo from '@components/shared/Logo'
import Navbar from '@components/shared/Nav/Bar'
import WalletConnect from '@components/shared/Wallet/Connect'

interface HeaderProps {
  className?: string
}

export const Header = ({ className }: HeaderProps) => {
  return (
    <header
      className={classnames.merge([
        className,
        'border-b border-neutral-700 container',
        'flex items-center justify-between p-4 md:p-5'
      ])}
    >
      <Logo />
      <div className='flex items-center justify-between gap-4'>
        <Navbar />
        <WalletConnect className='hidden md:block' />
      </div>
    </header>
  )
}

export default Header
