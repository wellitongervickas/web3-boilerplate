import type { Provider } from '@modules/core/types/wallet'

import type {
  Web3Provider,
  ExternalProvider,
  Listener
} from '@ethersproject/providers'

import { utils, providers } from 'ethers'
import CoinbaseWalletSDK, { CoinbaseWalletProvider } from '@coinbase/wallet-sdk'

import Signer from '@modules/core/wallet/signer'
import appConfig from '@app.config'
import { ProviderErrors } from '@modules/core/types/error'
import Logger from '@modules/utils/logger'

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
    } else {
      Logger.error(`${this.name} is not available`, ProviderErrors.NotAvailable)
    }
  }

  async login(): Promise<void> {
    if (!this.#coinbaseInstance?.request) {
      Logger.error(
        `${this.name} is not initialized`,
        ProviderErrors.NotInitialized
      )
    } else {
      try {
        await this.#coinbaseInstance.request({ method: 'eth_requestAccounts' })
      } catch (_) {
        Logger.error(
          `${this.name} has rejected by user`,
          ProviderErrors.UserRejected
        )
      }
    }
  }

  async logout() {
    this.#coinbaseInstance?.disconnect()
  }

  async switchNetwork(chainId: number) {
    if (!this.#coinbaseInstance?.request) {
      Logger.error(
        `${this.name} is not initialized`,
        ProviderErrors.NotInitialized
      )
    } else {
      try {
        await this.#coinbaseInstance.request({
          method: 'wallet_switchEthereumChain',
          params: [{ chainId: utils.hexValue(chainId) }]
        })
      } catch (_) {
        Logger.error(
          ` ${this.name} could not switch to network id ${chainId}`,
          ProviderErrors.SwitchNetworkChainId
        )
      }
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
