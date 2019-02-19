import React, { Component } from 'react';
import {
  View, Text, Image, TouchableOpacity,
} from 'react-native';
import ScrollableTabView, {
  DefaultTabBar,
} from 'react-native-scrollable-tab-view';
import Icon from 'react-native-vector-icons/MaterialIcons';

// Constants

// Components
import InformationItem from '../../../components/informationItem';

// Styles
import styles from './launchDetailStyles';

class LaunchDetailView extends Component {
  /* Props
   * ------------------------------------------------
   *   @prop { type }    name                - Description....
   */
  constructor(props) {
    super(props);
    this.state = {};
  }

  // Component Life Cycles

  // Component Functions

  render() {
    const {
      image, launchId, hashtag, status, isFavorite, handleFavoriteButton,
    } = this.props;

    return (
      <View style={styles.container}>
        <Image style={styles.image} source={{ uri: image || 'https://via.placeholder.com/350' }} />
        <TouchableOpacity style={styles.icon} onPress={() => handleFavoriteButton(launchId)}>
          <Icon name={isFavorite ? 'favorite' : 'favorite-border'} size={30} color="#900" />
        </TouchableOpacity>
        <View style={styles.tabView}>
          <ScrollableTabView
            renderTabBar={() => (
              <DefaultTabBar
                activeTextColor="white"
                inactiveTextColor="rgba(13, 121, 150, 0.7)"
                backgroundColor="deepskyblue"
                underlineStyle={{ backgroundColor: 'tomato' }}
              />
            )}
          >
            <View tabLabel="Information">
              <InformationItem label="LAUNCH ID" text={launchId} />
              {hashtag && <InformationItem label="HASHTAG" text={hashtag} />}
              <InformationItem label="STATUS" text={status} />
            </View>
            <Text tabLabel="Missions" />
          </ScrollableTabView>
        </View>
      </View>
    );
  }
}

export default LaunchDetailView;
