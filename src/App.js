import React from 'react'
import { Provider } from 'react-redux'
import 'bootstrap/dist/css/bootstrap.min.css'
// import Navbar from './components/Navbar'
import Aux from './hoc/Aux';
import Toolbar from './components/Toolbar'
import Homepage from './views/HomePage'
import Footer from './components/Footer'
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
        {/* <Navbar /> */}
        <Aux>
          <Toolbar />
          <Switch>
            <Route path="/" exact component={Homepage} />
          </Switch>
          <Footer />
        </Aux>
      </Router>
    </Provider>
  )
}

export default App