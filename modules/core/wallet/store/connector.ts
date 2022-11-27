import type { State, DefaultState } from '@modules/core/wallet/store/state'

class Connector {
  #state: State

  constructor(state: State) {
    this.#state = state
  }

  set connected(connected: boolean) {
    this.#state.connected.set(connected)
  }

  set connecting(connecting: boolean) {
    this.#state.connecting.set(connecting)
  }

  set error(error: string) {
    this.#state._error.set(error)
  }

  set address(address: string) {
    this.#state.address.set(address)
  }

  set chainId(chainId: number) {
    this.#state.chainId.set(chainId)
  }

  set providerName(providerName: string) {
    this.#state.providerName.set(providerName)
  }

  updateConnectedAccount({ address, chainId }: Partial<DefaultState>) {
    this.connected = true

    if (address) {
      this.address = address
    }

    if (chainId) {
      this.chainId = chainId
    }
  }

  updateDisconnectedAccount() {
    this.connected = false
    this.connecting = false
    this.address = ''
  }
}

export type { Connector }

export default Connector
