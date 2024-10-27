import { createZustandContext, CreateZustandStoreFunc } from '@/global/zustand'
import { createStore } from 'zustand'

type Test = {
  counter: number
  increase: (value: number) => void
}

const createTestStore: CreateZustandStoreFunc<Test> = initialState =>
  createStore<Test>()(set => ({
    counter: initialState.counter ?? 0,
    increase: value => set(state => ({ counter: state.counter + value })),
  }))

export const ZustandPageContext = createZustandContext(createTestStore)

export const useZustandPageStore = ZustandPageContext.useStore
