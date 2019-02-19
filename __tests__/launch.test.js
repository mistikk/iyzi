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

import LaunchContainer from '../src/screens/launch';

import { launchRequest } from '../src/redux/modules/launch';

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


describe('LaunchContainer', () => {
  let store;
  let wrapper;

  beforeEach(() => {
    store = mockStore(initialState);
    wrapper = shallow(<Provider store={store}><LaunchContainer /></Provider>);
  });

  it('> render the component', () => {
    expect(wrapper.find(LaunchContainer).length).toEqual(1);
  });

  it('> check action on mounting ', async () => {
    await store.dispatch(launchRequest(0));
    const action = store.getActions();

    expect(action[0].type).toBe('LAUNCH/REQUEST');
    expect(action[1].type).toBe('LAUNCH/SUCCESS');
  });

  it('> check action for load more ', async () => {
    await store.dispatch(launchRequest(1));
    const action = store.getActions();
    expect(action[0].type).toBe('LAUNCH/REQUEST');
    expect(action[1].type).toBe('LAUNCH/SUCCESS_LOAD_MORE');
  });
});
