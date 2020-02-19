import React, { Suspense } from 'react'

// public routes
import PublicRoutes from './public/Public.component'
// private routes
import PrivateRoutes from './private/Private.component'

function AppRouter() {
  const session = true
  return (
    <Suspense fallback={() => <div>Loading...</div>}>
      {session ? <PrivateRoutes /> : <PublicRoutes/> }
    </Suspense>
  )
}

export default AppRouter
