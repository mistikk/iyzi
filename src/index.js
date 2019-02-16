import React from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';
import { Dimensions } from 'react-native';
import { Provider } from 'react-redux';

import { ReduxNavigation } from './navigation/reduxNavigation';
import store from './redux/store/store';

EStyleSheet.build({
  // Primary Colors
  $primaryBlue: '#00B2FF',
  $primaryBlueDark: '#005B82',
  $primaryBlueLightDark: '#157EFC',
  $primaryGreen: '#0DFFB7',
  $primaryGray: '#FAFAFB',
  $primaryGrayDark: '#DBDBDB',
  $primaryButtonBlue: 'rgba(21, 180, 241, 100)',
  $primaryRed: '#FF655B',

  // General Colors
  $headerBlue: '#008ECC',
  $bubblesBlue: '#5CCDFF',
  $dangerColor: '#FF00B2',
  $warningColor: '#B2FF00',
  $successColor: '#0DFFB7',
  $buttonBlue: '#157EFC',
  $disableButton: '#B5B5B5',
  $shadowColor: '#ebebf2',
  $disableGray: '#D3D3D3',
  $white: '#FFFFFF',
  $black: '#000000',
  $lightGrayDark: '#5f5f5fbf',
  $lightBlue: '#4285f4bf',
  $border: '#E2E2E2',
  $inputText: '#797979',
  $invalidColor: '#FF4D00',
  $darkText: '#343434',
  $grayBorder: '#d8d8d8',

  $deviceHeight: Dimensions.get('window').height,
  $deviceWidth: Dimensions.get('window').width,
});

export default () => (
  <Provider store={store}>
    <ReduxNavigation />
  </Provider>
);
