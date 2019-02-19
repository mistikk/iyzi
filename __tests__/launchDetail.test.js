/**
 * @format
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import 'react-native';
import React from 'react';
import { shallow } from 'enzyme';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';

import LaunchDetailContainer from '../src/screens/rocketDetail';

import { launchRequest } from '../src/redux/modules/launch';
import { isMarkAsFavorite, setFavoriteItem } from '../src/services/firebaseService';
import { getLaunchStatus } from '../src/services/launchService';

const initialState = {
  launch:
    {
      data: {},
      error: null,
      status: 'LOADING',
    },
};
const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);


describe('LaunchDetailContainer', () => {
  let store;
  let wrapper;
  let action;

  beforeEach(() => {
    store = mockStore(initialState);
    wrapper = shallow(<Provider store={store}><LaunchDetailContainer /></Provider>);
  });

  it('> render the component', () => {
    expect(wrapper.find(LaunchDetailContainer).length).toEqual(1);
  });

  it('> check launchRequest action ', async () => {
    await store.dispatch(launchRequest(0));
    action = store.getActions();
    expect(action[1].type).toBe('LAUNCH/SUCCESS');
    expect(action[1].data.launches[0].id).toBeDefined();
  });

  it('> check setFavoriteItem action (Firebase) ', async () => {
    const launchId = action[1].data.launches[0].id;
    return setFavoriteItem({ id: launchId, favorite: false }).then((isFavoriteResponse) => {
      expect(isFavoriteResponse).toBeDefined();
    });
  });

  it('> check isMarkAsFavorite action (Firebase) ', async () => {
    const launchId = action[1].data.launches[0].id;
    return isMarkAsFavorite(launchId).then((isFavoriteResponse) => {
      expect(isFavoriteResponse).toBeDefined();
      expect(isFavoriteResponse).toBe(false);
    });
  });

  it('> check getLaunchStatus action (Firebase) ', async () => {
    const launchId = action[1].data.launches[0].id;
    return getLaunchStatus(launchId).then((isFavoriteResponse) => {
      expect(isFavoriteResponse).toBeDefined();
      expect(isFavoriteResponse.types).toBeDefined();
    });
  });
});
