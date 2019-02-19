import { createStackNavigator } from 'react-navigation';

import ROUTES from '../constants/routeNames';

import {
  Launch,
  LaunchDetail,
} from '../screens';

export default createStackNavigator(
  {
    [ROUTES.SCREENS.LAUNCH]: {
      screen: Launch,
      navigationOptions: {
        headerTitle: 'Launch List',
      },
    },
    [ROUTES.SCREENS.LAUNCH_DETAIL]: {
      screen: LaunchDetail,
    },
  },
  {
    initialRouteName: ROUTES.SCREENS.LAUNCH,
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: 'tomato',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
  },
);
