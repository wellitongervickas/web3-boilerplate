import type { Provider } from '@modules/core/types/wallet'

import type { Web3Provider, Listener } from '@ethersproject/providers'

import WalletConnectProvider from '@walletconnect/web3-provider'
import { providers, utils } from 'ethers'

import Signer from '@modules/core/wallet/signer'
import appConfig from '@app.config'

import { ProviderErrors } from '@modules/core/types/error'
import Logger from '@modules/utils/logger'

type Rpc = {
  [key: number]: string
}

class WalletConnect implements Provider {
  readonly name = 'walletconnect'

  #walletConnectInstance: WalletConnectProvider | undefined
  instance: Web3Provider | undefined
  signer: Signer | undefined

  async install() {
    const _walletConnect = new WalletConnectProvider({
      qrcodeModalOptions: {
        desktopLinks: ['ledger', 'wallet', 'crypto'],
        mobileLinks: ['rainbow', 'trust']
      },
      infuraId: appConfig.dapp.infuraId,
      rpc: Object.values(appConfig.dapp.rpcs).reduce((rpcs: Rpc, rpc) => {
        rpcs[rpc.chainId] = rpc.api
        return rpcs
      }, {})
    })

    if (_walletConnect) {
      this.#walletConnectInstance = _walletConnect
      this.instance = new providers.Web3Provider(_walletConnect, 'any')
      this.signer = new Signer(this.instance.getSigner())
    } else {
      Logger.error(`${this.name} is not available`, ProviderErrors.NotAvailable)
    }
  }

  async login(): Promise<void> {
    if (!this.#walletConnectInstance?.enable) {
      Logger.error(
        `${this.name} is not initialized`,
        ProviderErrors.NotInitialized
      )
    } else {
      try {
        await this.#walletConnectInstance.enable()
      } catch (error) {
        Logger.error(
          `${this.name} has rejected by user`,
          ProviderErrors.UserRejected
        )
      }
    }
  }

  async logout() {
    await this.#walletConnectInstance?.disconnect()
  }

  async switchNetwork(chainId: number) {
    if (!this.#walletConnectInstance?.request) {
      Logger.error(
        `${this.name} is not initialized`,
        ProviderErrors.NotInitialized
      )
    } else {
      try {
        await this.#walletConnectInstance.request({
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
    this.#walletConnectInstance?.on(
      'accountsChanged',
      ([account]: string[]) => {
        callback(account)
      }
    )
  }

  onChainChanged(callback: Listener) {
    this.#walletConnectInstance?.on('chainChanged', callback)
  }

  onConnect(callback: Listener) {
    this.#walletConnectInstance?.on('connect', callback)
  }

  onDisconnect(callback: Listener) {
    this.#walletConnectInstance?.on('disconnect', callback)
  }
}

export type { WalletConnect }

export default WalletConnect
