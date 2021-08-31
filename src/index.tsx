import App from './components/App'
import { BG } from './assets'
import DetailsPage from './pages/details'
import FilmsPage from './pages/films'
import LoadingComponent from './components/loading'
import PageNotFound from './pages/page-not-found'
import PeoplePage from './pages/people'
import PlanetsPage from './pages/planets'
import { Provider } from 'react-redux'
import ReactDOM from 'react-dom'
import SpeciesPage from './pages/species'
import StarshipsPage from './pages/starships'
// import { ThemeProvider } from 'theme-ui'
import VehiclesPage from './pages/vehicles'
import { colors } from './theme/colors'
import { createGlobalStyle } from 'styled-components'
import { store } from './redux/store'

import React, { Suspense } from 'react'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css'
import './styles/mediaQuery.css'
// import theme from './theme'

const GlobalStyle = createGlobalStyle`
    *, body {
      margin: 0;
      padding: 0;
      font-family: 'Roboto', sans-serif;
    }

    body {
      background-image: url(${BG});
      background-color: ${colors.primary} !important;
      background-size: auto;
      background-blend-mode: overlay;
    }

    a,
    p {
      font-family: 'Roboto', sans-serif;
    }
    .card{
      border: 0 !important;
    }
`

const routes = (
    <Provider store={store}>
      <Router>
        <GlobalStyle />
        <App>
          <Suspense fallback={<LoadingComponent />}>
            <Switch>
              <Route path={['/', '/people']} exact component={PeoplePage} />
              <Route path='/planets' exact component={PlanetsPage} />
              <Route path='/species' exact component={SpeciesPage} />
              <Route path='/films' exact component={FilmsPage} />
              <Route path='/vehicles' exact component={VehiclesPage} />
              <Route path='/starships' exact component={StarshipsPage} />
              <Route path='/more/:tab/:id' exact component={DetailsPage} />
              <Route path='*/*' component={PageNotFound} />
            </Switch>
          </Suspense>
        </App>
      </Router>
    </Provider>
)

ReactDOM.render(routes, document.getElementById('root'))
