import App from './components/App'
import DetailPage from './components/DetailPage'
import PeoplePage from './pages/people'
import { Provider } from 'react-redux'
import React from 'react'
import ReactDOM from 'react-dom'
import {colors} from "./theme/colors"
import { createGlobalStyle } from 'styled-components'
import createStore from './store'

import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css'

const GlobalStyle = createGlobalStyle`
    *, body {
      margin: 0;
      padding: 0;
      font-family: 'Roboto', sans-serif;
    }

    body {
      background-color: ${colors.primary} !important;
    }

    a,
    p {
      font-family: 'Roboto', sans-serif;
    }
`

const routes = (
  <Provider store={createStore()}>
    <Router>
      <GlobalStyle />
      <App>
        <Switch>
          <Route path={['/', '/people']} exact component={PeoplePage} />
          <Route path="/detail/:id" exact component={DetailPage} />
        </Switch>
      </App>
    </Router>
  </Provider>
)

ReactDOM.render(routes, document.getElementById('root'))
