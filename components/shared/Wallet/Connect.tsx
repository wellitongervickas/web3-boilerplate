import { useEffect, useState } from 'react'
import WalletModal from '@components/shared/Wallet/Modal'
import useDapp from '@modules/hooks/useDapp'
import string from '@modules/utils/string'
import Modal from '@components/shared/Modal'
import Button from '@components/shared/Form/Button'

interface WalletConnectProps {
  className?: string
}

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
      <Button
        onClick={handleOpenModal}
        loading={state.connecting}
        className={className}
      >
        {state.connected &&
          !state.connecting &&
          string.toEllipsis(state.address, 4, -5)}
        {!state.connected && !state.connecting && 'Connect Wallet'}
      </Button>
      <Modal isOpen={isModalOpen} setIsOpen={setIsModalOpen}>
        <WalletModal />
      </Modal>
    </>
  )
}

export default WalletConnect
