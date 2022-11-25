import Wallet from '@modules/core/wallet/wallet'
import store from '@modules/core/wallet/store'
import appConfig from '@app.config'

const wallet = new Wallet(store, {
  defaultChainId: appConfig.dapp.defaultChain
})

export default wallet
