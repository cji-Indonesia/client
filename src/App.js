import React from 'react'
import { Provider } from 'react-redux'
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './components/Navbar'
import Homepage from './views/HomePage'
import store from './redux'

import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

function App() {
  return(
    <Provider store={store}>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Homepage} />
        </Switch>
      </Router>
    </Provider>
  )
}

export default App