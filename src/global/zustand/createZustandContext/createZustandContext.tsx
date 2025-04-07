'use client'

import { RawObject } from '@/global/types'
import { createContext, useContext, useState } from 'react'
import { StoreApi, useStore as useZustandStore } from 'zustand'
import { CreateZustandContext, CreateZustandStoreFunc, ZustandProvider } from './types'

export const createZustandContext: CreateZustandContext = <T extends RawObject>(
  createStore: CreateZustandStoreFunc<T>
) => {
  const ZustandContext = createContext<StoreApi<T> | null>(null)

  const Provider = ({ children, initialValue }: ZustandProvider<T>) => {
    const [store] = useState(() => createStore(initialValue))

    return <ZustandContext.Provider value={store}>{children}</ZustandContext.Provider>
  }

  function useStore<U = T>(selector?: (state: T) => U): U {
    const context = useContext(ZustandContext)

    if (!context) {
      throw new Error('useStore must be used within a Provider')
    }

    return useZustandStore(context, selector ?? (state => state as unknown as U))
  }

  return { Provider, useStore }
}
