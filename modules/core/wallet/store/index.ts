import state from '@modules/core/wallet/store/state'
import Connector from '@modules/core/wallet/store/connector'

const store = new Connector(state)

type Store = typeof store

export type { Store }

export default store
