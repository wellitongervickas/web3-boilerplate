import { useEffect, useState } from 'react'
import dynamic from 'next/dynamic'
import { Suspense } from 'react'

import classnames from '@modules/utils/classnames'
import WalletModal from '@components/shared/Wallet/Modal'
import useDapp from '@modules/hooks/useDapp'
import string from '@modules/utils/string'
import Loading from '../Loading'

interface WalletConnectProps {
  className?: string
}

const Modal = dynamic(() => import('@components/shared/Modal'), {
  suspense: true
})

export const WalletConnect = ({ className }: WalletConnectProps) => {
  const { state, wallet } = useDapp()
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleOpenModal = () => {
    if (state.connected || state.connecting) {
      wallet.disconnect()
    } else {
      setIsModalOpen(true)
    }
  }

  useEffect(() => {
    if (state.connected) {
      setIsModalOpen(false)
    }
  }, [state.connected])

  return (
    <>
      <button
        onClick={handleOpenModal}
        className={classnames.merge([
          className,
          'bg-primary-500 text-white hover:bg-primary',
          'py-1.5 px-3 transition-colors duration-150'
        ])}
      >
        {state.connected &&
          !state.connecting &&
          string.toEllipsis(state.address, 4, -5)}
        {!state.connected && !state.connecting && 'Connect Wallet'}
        {state.connecting && (
          <Loading className='m-2' pinsClassName='bg-white' />
        )}
      </button>
      <Suspense>
        <Modal isOpen={isModalOpen} setIsOpen={setIsModalOpen}>
          <WalletModal />
        </Modal>
      </Suspense>
    </>
  )
}

export default WalletConnect
