import type { JsonRpcSigner } from '@ethersproject/providers'

class Signer {
  instance: JsonRpcSigner

  constructor(instance: JsonRpcSigner) {
    this.instance = instance
  }

  async getAddress(): Promise<string> {
    return await this.instance.getAddress()
  }

  async getChainId(): Promise<number> {
    return await this.instance.getChainId()
  }

  async refresh() {
    const [address, chainId] = await Promise.all([
      this.getAddress(),
      this.getChainId()
    ])

    return {
      address,
      chainId
    }
  }
}

export type { Signer }

export default Signer
