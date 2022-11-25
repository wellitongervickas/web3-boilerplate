import type { Provider } from '@modules/core/types/wallet'

import type { Web3Provider, Listener } from '@ethersproject/providers'

import WalletConnectProvider from '@walletconnect/web3-provider'
import Signer from '@modules/core/wallet/signer'
import { providers } from 'ethers'
import { utils } from 'ethers'
import appConfig from '@app.config'

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
        desktopLinks: ['ledger', 'wallet', 'crypto', 'wallet3'],
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

      return this
    } else {
      throw new Error(`Provider: ${this.name} is not available`)
    }
  }

  async login(): Promise<void> {
    if (!this.#walletConnectInstance?.enable) {
      throw new Error(`Provider: ${this.name} could not connect your wallet`)
    }

    try {
      await this.#walletConnectInstance?.enable()
    } catch (error) {
      throw new Error(`Provider: ${this.name} could not connect your account`)
    }
  }

  async logout() {
    await this.#walletConnectInstance?.disconnect()
  }

  async switchNetwork(chainId: number) {
    if (!this.#walletConnectInstance?.request) {
      throw new Error(`Provider: ${this.name} could not switch network`)
    }

    try {
      await this.#walletConnectInstance.request({
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
