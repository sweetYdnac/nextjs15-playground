import { FC } from 'react'
import { useZustandPageStore } from './context'

export const NextedComponent: FC = () => {
  const counter = useZustandPageStore(state => state.counter)

  return (
    <>
      <p>NextedComponent</p>
      <p>{counter}</p>
    </>
  )
}
