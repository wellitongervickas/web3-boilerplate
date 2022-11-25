import MetaMask from './metamask'
import WalletConnect from './walletconnect'
import Coinbase from './coinbase'

const providers = {
  metamask: MetaMask,
  walletconnect: WalletConnect,
  coinbase: Coinbase
}

export default providers
