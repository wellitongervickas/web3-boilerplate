import type { State as HookstateState } from '@hookstate/core'
import { createState } from '@hookstate/core'

export type DefaultState = {
  address: string
  providerName: string
  connected: boolean
  connecting: boolean
  chainId: number
  _error: string
}

export const DEFAULT_STATE: DefaultState = {
  address: '',
  providerName: '',
  connected: false,
  connecting: false,
  chainId: 0,
  _error: ''
}

const state = createState(DEFAULT_STATE)

export type State = HookstateState<DefaultState>

export default state
