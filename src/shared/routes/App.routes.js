import React, { Suspense } from 'react'

// area
import Tbs from '../../areas/tbs'

// public routes
import PublicRoutes from './public/Public.component'
import PrivateRoutes from './private/Private.component'

function AppRouter() {
  const session = true
  return (
    <Tbs>
      <Suspense fallback={() => <div>Loading...</div>}>
        {session ? <PrivateRoutes /> : <PublicRoutes/> }
      </Suspense>
    </Tbs>
  )
}

export default AppRouter
