import type { Provider } from '@modules/core/types/wallet'

import type {
  Web3Provider,
  ExternalProvider,
  Listener
} from '@ethersproject/providers'

import Signer from '@modules/core/wallet/signer'

import CoinbaseWalletSDK, { CoinbaseWalletProvider } from '@coinbase/wallet-sdk'

import { utils } from 'ethers'
import { providers } from 'ethers'
import appConfig from '@app.config'

class Coinbase implements Provider {
  readonly name = 'coinbase'
  #coinbaseInstance: CoinbaseWalletProvider | undefined

  instance: Web3Provider | undefined
  signer: Signer | undefined

  async install() {
    const coinbaseWallet = new CoinbaseWalletSDK({
      appName: appConfig.name
    })

    const _coinbaseInstance = coinbaseWallet.makeWeb3Provider(
      appConfig.dapp.rpcs[0].api,
      appConfig.dapp.defaultChain
    )

    if (_coinbaseInstance) {
      this.#coinbaseInstance = _coinbaseInstance
      this.instance = new providers.Web3Provider(
        this.#coinbaseInstance as unknown as ExternalProvider,
        'any'
      )

      this.signer = new Signer(this.instance.getSigner())

      return this
    } else {
      throw new Error(`Provider: ${this.name} is not available`)
    }
  }

  async login(): Promise<void> {
    if (!this.#coinbaseInstance?.request) {
      throw new Error(`Provider: ${this.name} could not connect your wallet`)
    }

    try {
      await this.#coinbaseInstance.request({ method: 'eth_requestAccounts' })
    } catch (error) {
      throw new Error(`Provider: ${this.name} could not connect your account`)
    }
  }

  async logout() {
    this.#coinbaseInstance?.disconnect()
  }

  async switchNetwork(chainId: number) {
    if (!this.#coinbaseInstance?.request) {
      throw new Error(`Provider: ${this.name} could not switch network`)
    }

    try {
      await this.#coinbaseInstance.request({
        method: 'wallet_switchEthereumChain',
        params: [{ chainId: utils.hexValue(chainId) }]
      })
    } catch (_) {
      throw new Error(
        `Provider: ${this.name} could not switch to network id ${chainId}`
      )
    }
  }

  onAccountsChanged(callback: Listener) {
    this.#coinbaseInstance?.on('accountsChanged', ([account]: string[]) => {
      callback(account)
    })
  }

  onChainChanged(callback: Listener) {
    this.#coinbaseInstance?.on('chainChanged', callback)
  }

  onConnect(callback: Listener) {
    this.#coinbaseInstance?.on('connect', callback)
  }

  onDisconnect(callback: Listener) {
    this.#coinbaseInstance?.on('disconnect', callback)
  }
}

export type { Coinbase }

export default Coinbase
