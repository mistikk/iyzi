import React, { Component } from 'react';
import { FlatList } from 'react-native';

// Constants

// Components
import RocketCard from '../../../components/rocketCard';

class LaunchView extends Component {
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
    const { launches, handleLoadMore } = this.props;

    return (
      <FlatList
        data={launches}
        onEndReached={() => handleLoadMore()}
        onEndReachedThreshold={1}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => {
          let image = '';
          if (item.rocket && item.rocket.imageURL) {
            const { rocket } = item;
            image = `${rocket.imageURL.split('_')[0]}_${rocket.imageSizes[0]}.jpg`;
          }

          return (
            <RocketCard
              image={image}
              title={item.name}
              description={item.net}
              id={item.id}

            />
          );
        }}
      />
    );
  }
}

export default LaunchView;
