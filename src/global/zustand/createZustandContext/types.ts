import { RawObject } from '@/global/types'
import { ReactNode } from 'react'
import { StoreApi } from 'zustand'

export type CreateZustandStoreFunc<T extends RawObject> = (
  initialState: Partial<T>
) => StoreApi<T>

export type ZustandProvider<T extends RawObject> = {
  children: ReactNode
  initialValue: Partial<T>
}

export type CreateZustandContext = <T extends RawObject>(
  getStore: CreateZustandStoreFunc<T>
) => {
  Provider: (props: ZustandProvider<T>) => ReactNode
  useStore: {
    (): T
    <U = T>(selector: (state: T) => U): U
  }
}
