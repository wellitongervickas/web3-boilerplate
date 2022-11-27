import useDapp from '@modules/hooks/useDapp'
import Loading from '../Loading'

import dynamic from 'next/dynamic'
import { Suspense } from 'react'
import classnames from '@modules/utils/classnames'

const WalletProviders = dynamic(
  () => import('@components/shared/Wallet/Providers'),
  {
    suspense: true
  }
)

export const WalletModal = () => {
  const { state } = useDapp()

  return (
    <section
      className={classnames.merge([
        'flex flex-col gap-6 bg-neutral-200 p-12 text-center md:rounded-md',
        'h-screen min-h-[60px] w-screen min-w-[60px] md:h-auto md:w-auto '
      ])}
    >
      <h3 className='text-lg text-neutral-700'>Connect Wallet</h3>
      <Suspense>
        <WalletProviders />
      </Suspense>
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
