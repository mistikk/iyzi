import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: '$deviceWidth',
    flex: 2,
  },
  tabView: {
    flex: 5,
  },
  icon: {
    position: 'absolute',
    top: 20,
    right: 20,
  },
});
