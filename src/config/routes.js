import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import createHistory from 'history/createBrowserHistory'

import MainContainer from '../containers/mainContainer'

const history = createHistory()

//  Provider is a react redux component in charge of passing the store to the sub components in the app
//  import { Provider } from 'react-redux'

// import store , { history } from './store'

const Routes = () => (
  <Router history={history}>
    <div>
      <Route exact path='/' component={MainContainer}></Route>
      <Route path='/home' component={() => <h1>Hello everybody from home</h1>}></Route>
    </div>
  </Router>
)

export default Routes
