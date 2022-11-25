import ProviderMetaMask from '@components/shared/Wallet/Provider/MetaMask'
import ProviderWalletConnect from '@components/shared/Wallet/Provider/WalletConnect'
import ProviderCoinbase from '@components/shared/Wallet/Provider/Coinbase'

export const WalletProviders = () => (
  <ul className='flex justify-center gap-4'>
    <li>
      <ProviderMetaMask />
    </li>
    <li>
      <ProviderCoinbase />
    </li>
    <li>
      <ProviderWalletConnect />
    </li>
  </ul>
)

export default WalletProviders
