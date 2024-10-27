import { ReactNode } from 'react'
import { StoreApi } from 'zustand'

export type CreateZustandStoreFunc<T extends object> = (
  initialState: Partial<T>
) => StoreApi<T>

export type ZustandProvider<T extends object> = {
  children: ReactNode
  initialValue: Partial<T>
}

export type CreateZustandContext = <T extends object>(
  getStore: CreateZustandStoreFunc<T>
) => {
  Provider: (props: ZustandProvider<T>) => ReactNode
  useStore: <U>(selector: (state: T) => U) => U
}
