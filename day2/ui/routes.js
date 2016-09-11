import React from 'react'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import {
  App,
  Home
} from './components'
import { Pages } from './containers'

export default () => {
  return (
    <Router history={browserHistory}>
      <Route path='/'
             component={App}>
        <IndexRoute component={Home} />
        <route path='pages'
               component={Pages} />
      </Route>
    </Router>
  )
}
