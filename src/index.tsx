import App from './components/App'
import FilmsPage from './pages/films'
import PageNotFound from './pages/page-not-found'
import PeoplePage from './pages/people'
import PlanetsPage from './pages/planets'
import { Provider } from 'react-redux'
import React from 'react'
import ReactDOM from 'react-dom'
import SpeciesPage from './pages/species'
import StarshipsPage from './pages/starships'
import VehiclesPage from './pages/vehicles'
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
          <Route path="/planets" exact component={PlanetsPage} />
          <Route path="/species" exact component={SpeciesPage} />
          <Route path="/films" exact component={FilmsPage} />
          <Route path="/vehicles" exact component={VehiclesPage} />
          <Route path="/starships" exact component={StarshipsPage} />
          <Route path="*/*" component={PageNotFound} />
        </Switch>
      </App>
    </Router>
  </Provider>
)

ReactDOM.render(routes, document.getElementById('root'))
