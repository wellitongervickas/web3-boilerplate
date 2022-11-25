import type { Provider } from '@modules/core/types/wallet'

import type {
  Web3Provider,
  ExternalProvider,
  Listener
} from '@ethersproject/providers'

import Signer from '@modules/core/wallet/signer'

import detectEthereumProvider from '@metamask/detect-provider'
import { utils } from 'ethers'
import { providers } from 'ethers'

interface MetaMaskInstance extends ExternalProvider {
  on(eventName: string, listener: Listener): void
}

class Metamask implements Provider {
  readonly name = 'metamask'
  #ethereum: MetaMaskInstance | undefined

  instance: Web3Provider | undefined
  signer: Signer | undefined

  async install() {
    const _ethereum = await detectEthereumProvider()

    if (_ethereum) {
      this.#ethereum = _ethereum
      this.instance = new providers.Web3Provider(this.#ethereum, 'any')
      this.signer = new Signer(this.instance.getSigner())

      return this
    } else {
      throw new Error(`Provider: ${this.name} is not available`)
    }
  }

  async login(): Promise<void> {
    if (!this.#ethereum?.request) {
      throw new Error(`Provider: ${this.name} could not connect your wallet`)
    }

    try {
      await this.#ethereum.request({ method: 'eth_requestAccounts' })
    } catch (error) {
      throw new Error(`Provider: ${this.name} could not connect your account`)
    }
  }

  async logout() {
    return Promise.resolve()
  }

  async switchNetwork(chainId: number) {
    if (!this.#ethereum?.request) {
      throw new Error(`Provider: ${this.name} could not switch network`)
    }

    try {
      await this.#ethereum.request({
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
    this.#ethereum?.on('accountsChanged', ([account]: string[]) => {
      callback(account)
    })
  }

  onChainChanged(callback: Listener) {
    this.#ethereum?.on('chainChanged', callback)
  }

  onConnect(callback: Listener) {
    this.#ethereum?.on('connect', callback)
  }

  onDisconnect(callback: Listener) {
    this.#ethereum?.on('disconnect', callback)
  }
}

export type { Metamask }

export default Metamask
