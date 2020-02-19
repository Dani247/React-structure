import { lazy } from 'react'

export default [
  {
    key: '',
    path: '/',
    exact: true,
    component: lazy(() => import('../../containers/test/views'))
  }
]
