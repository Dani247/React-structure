import React from 'react'
import { Switch, Route } from 'react-router-dom'

// components


// routes
import routes from './private.routes'

function PrivateComponent() {
  return (
    <div>
      {/* <Menu /> */}
      <div>
        <Switch>
          {routes.map(route => {
            return <Route {...route} />
          })}
        </Switch>
      </div>
    </div>
  )
}

export default PrivateComponent
