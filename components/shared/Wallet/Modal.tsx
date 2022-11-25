import WalletProviders from '@components/shared/Wallet/Providers'
import useDapp from '@modules/hooks/useDapp'
import Loading from '../Loading'

export const WalletModal = () => {
  const { state } = useDapp()

  return (
    <section className='flex flex-col gap-6 p-12 text-center'>
      <h3 className='text-lg text-neutral-700'>Connect Wallet</h3>
      <WalletProviders />
      {state.connecting && (
        <>
          <div className='h-2 w-full border-b border-neutral-200' />

          <div className='flex flex-col items-center justify-center gap-2'>
            <Loading pinsClassName='bg-neutral-400' />
          </div>
        </>
      )}
    </section>
  )
}

export default WalletModal
