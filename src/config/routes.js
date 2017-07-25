import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import createHistory from 'history/createBrowserHistory'

import MainContainer from 'containers/mainContainer'

const history = createHistory()

const Routes = () => (
  <Router history={history}>
    <div>
      <Route exact path='/' component={MainContainer}></Route>
    </div>
  </Router>
)

export default Routes
