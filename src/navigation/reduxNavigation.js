import { connect } from 'react-redux';
import {
  createReduxContainer,
  createReactNavigationReduxMiddleware,
} from 'react-navigation-redux-helpers';
import AppNavigation from './routes';

const middleware = createReactNavigationReduxMiddleware(state => state.nav);

const AppWithNavigationState = createReduxContainer(AppNavigation, 'root');

const mapStateToProps = state => ({
  state: state.nav,
});

const ReduxNavigation = connect(mapStateToProps)(AppWithNavigationState);

export { AppNavigation, ReduxNavigation, middleware };
