import { useEffect, useState } from 'react'

import providers from '@modules/core/wallet/providers'

import useDapp from '@modules/hooks/useDapp'
import dom from '@modules/utils/dom'

function useDappInitializer() {
  const [isDappInitialized, setIsDappInitialized] = useState(false)
  const { state, wallet } = useDapp()

  useEffect(() => {
    if (isDappInitialized) return
    setIsDappInitialized(true)

    dom.windowIsAvailable().then((windowIsAvailable) => {
      if (windowIsAvailable && state.connected && state.providerName) {
        const provider = new providers[
          state.providerName as keyof typeof providers
        ]()

        wallet.use(provider).then(wallet.connect.bind(wallet))
      }
    })
  }, [isDappInitialized, state.connected, state.providerName, wallet])
}

export default useDappInitializer
