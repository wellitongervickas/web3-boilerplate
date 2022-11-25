import { useHookstate } from '@hookstate/core'
import wallet from '@modules/core/wallet'
import state, { DEFAULT_STATE, State } from '@modules/core/wallet/store/state'
import proxies from '@modules/utils/proxy'
import { Persistence } from '@hookstate/persistence'
import { useEffect, useState } from 'react'
import dom from '@modules/utils/dom'

const persistence = Persistence('tx_1.wallet')

export function useDapp() {
  const globalState = useHookstate<State>(state)
  const [isStorageAttached, setIsStorageAttached] = useState(false)

  const _state = proxies.readOnly<typeof DEFAULT_STATE, typeof globalState>(
    globalState
  )

  useEffect(() => {
    if (isStorageAttached) return
    setIsStorageAttached(true)

    dom.windowIsAvailable().then((isAvailable) => {
      if (isAvailable) {
        globalState.attach(persistence)
      }
    })
  }, [globalState, isStorageAttached])

  return {
    state: _state,
    wallet
  }
}

export default useDapp
