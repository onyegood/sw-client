import App from './components/App';
import DetailsPage from './pages/details';
import FilmsPage from './pages/films';
import LoadingComponent from './components/loading';
import PageNotFound from './pages/page-not-found';
import PeoplePage from './pages/people';
import PlanetsPage from './pages/planets';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import SpeciesPage from './pages/species';
import StarshipsPage from './pages/starships';
// import { ThemeProvider } from 'theme-ui'
import VehiclesPage from './pages/vehicles';
import { store } from './redux/store';

import React, { Suspense } from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/mediaQuery.css';
import { GlobalStyle } from './styles';
import FavoritesPage from './pages/favorites';
// import theme from './theme'

const routes = (
	<Provider store={store}>
		<Router>
			<GlobalStyle />
			<App>
				<Suspense fallback={<LoadingComponent />}>
					<Switch>
						<Route component={PeoplePage}
							exact
							path={['/', '/people']}
						/>
						<Route component={PlanetsPage}
							exact
							path="/planets"
						/>
						<Route component={SpeciesPage}
							exact
							path="/species"
						/>
						<Route component={FilmsPage}
							exact
							path="/films"
						/>
						<Route component={VehiclesPage}
							exact
							path="/vehicles"
						/>
						<Route component={StarshipsPage}
							exact
							path="/starships"
						/>
						<Route component={DetailsPage}
							exact
							path="/more/:tab/:id"
						/>
						<Route component={FavoritesPage}
							exact
							path="/favorites"
						/>
						<Route component={PageNotFound}
							path="*/*"
						/>
					</Switch>
				</Suspense>
			</App>
		</Router>
	</Provider>
);

ReactDOM.render(routes, document.getElementById('root'));
