const appConfig = {
  name: 'my app',
  meta: {
    description: 'my app description'
  },
  dapp: {
    infuraId: 'MY_KEY',
    defaultChain: 137,
    allowedIds: [137],
    rpcs: [
      {
        id: 'polygon',
        chainId: 137,
        api: 'https://polygon-mainnet.g.alchemy.com/v2/MY_KEY'
      }
    ]
  }
}

export default appConfig
