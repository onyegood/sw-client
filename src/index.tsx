import App from './components/App'
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
import { store } from './redux/store'

import React, { Suspense } from 'react'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css'
import './styles/mediaQuery.css'
import { GlobalStyle } from './styles'
import FavoritesPage from './pages/favorites'
// import theme from './theme'



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
              <Route path='/favorites' exact component={FavoritesPage} />
              <Route path='*/*' component={PageNotFound} />
            </Switch>
          </Suspense>
        </App>
      </Router>
    </Provider>
)

ReactDOM.render(routes, document.getElementById('root'))
