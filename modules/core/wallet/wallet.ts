import type { Store } from '@modules/core/wallet/store'
import type { Provider } from '@modules/core/types/wallet'

type Options = {
  defaultChainId?: number
}

class Wallet {
  #provider?: Provider
  #store: Store

  constructor(store: Store, options?: Options) {
    this.#store = store

    this.#handleOptions(options)
  }

  #handleOptions(options?: Options) {
    if (options?.defaultChainId) {
      this.#store.chainId = options.defaultChainId
    }
  }

  async use(provider: Provider) {
    this.#store.error = ''

    try {
      const _provider = await provider.install()
      this.#provider = _provider
      this.#store.providerName = _provider.name
    } catch (error: any) {
      this.#store.error = error.message
    }
  }

  async connect() {
    if (!this.#provider) {
      this.#store.error = 'Wallet: provider is not available'
      this.#store.updateDisconnectedAccount()
      return
    }

    this.#store.connecting = true
    this.#store.error = ''

    try {
      this.#setProviderListeners()
      await this.#provider.login()
      await this.#refetchAccount()
    } catch (error: any) {
      this.#store.error = error.message
      this.#store.updateDisconnectedAccount()
    } finally {
      this.#store.connecting = false
    }
  }

  #setProviderListeners() {
    this.#provider?.onAccountsChanged(this.#onAccountsChanged.bind(this))
    this.#provider?.onChainChanged(this.#onChainChanged.bind(this))
    this.#provider?.onDisconnect(this.disconnect.bind(this))
    this.#provider?.onConnect(this.#onConnect.bind(this))
  }

  async #onAccountsChanged(address: string) {
    if (address) {
      await this.#refetchAccount()
    } else {
      this.#store.updateDisconnectedAccount()
    }
  }

  async #onChainChanged() {
    await this.#refetchAccount()
  }

  async disconnect() {
    await this.#provider?.logout()

    this.#provider = undefined

    this.#store.updateDisconnectedAccount()
  }

  async #onConnect() {
    await this.#refetchAccount()
  }

  async #refetchAccount() {
    try {
      const account = await this.#provider?.signer?.refresh()

      if (account) {
        this.#setProviderListeners()
        this.#store.updateConnectedAccount(account)
      }
    } catch (_) {
      this.#store.updateDisconnectedAccount()
    }
  }
}

export default Wallet
