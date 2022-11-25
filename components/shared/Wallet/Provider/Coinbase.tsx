import Image from 'next/image'

import Coinbase from '@modules/core/wallet/providers/coinbase'
import classnames from '@modules/utils/classnames'
import useDapp from '@modules/hooks/useDapp'
import string from '@modules/utils/string'

const provider = new Coinbase()

export const ProviderCoinbase = () => {
  const { wallet, state } = useDapp()

  const handleConnect = async () => {
    if (state.connecting) return
    await wallet.use(provider)
    await wallet.connect()
  }

  return (
    <button
      title={provider.name}
      className='rounded-md bg-neutral-200 p-2 transition-colors duration-150 hover:bg-neutral-200/50'
      onClick={handleConnect}
    >
      <div className='relative h-8 w-8'>
        <Image
          loading='lazy'
          alt={string.upperFirst(provider.name)}
          src={`/assets/images/providers/${provider.name}.png`}
          fill
          sizes={`
            6vw
          `}
          className={classnames.merge([
            state.connecting ? 'cursor-not-allowed blur-[1px]' : 'blur-0',
            'transition-all duration-200'
          ])}
        />
      </div>
    </button>
  )
}

export default ProviderCoinbase