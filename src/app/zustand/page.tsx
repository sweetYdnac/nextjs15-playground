'use client'

import { NextPage } from 'next'
import { ZustandPageContext } from './context'
import { NextedComponent } from './NextedComponent'

const ZustandPage: NextPage = () => {
  return (
    <div>
      <ZustandPageContext.Provider initialValue={{ counter: 10 }}>
        <NextedComponent />
      </ZustandPageContext.Provider>
    </div>
  )
}

export default ZustandPage
