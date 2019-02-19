import React, { Fragment } from 'react';
import {
  TouchableOpacity, View, Text, Image,
} from 'react-native';
import styles from './rocketCardStyles';

/* Props
* ------------------------------------------------
*   @prop { type }    name                - Description....
*/

const RocketCardView = ({
  image, title, description, handleOnClick,
}) => (
  <TouchableOpacity onPress={() => handleOnClick()}>
    <Fragment>
      <Image style={styles.image} source={{ uri: image || 'https://via.placeholder.com/350' }} />
      <View style={styles.description}>
        <Text>{title || 'Rocket Title'}</Text>
        <Text>{description || 'TBD'}</Text>
      </View>
    </Fragment>
  </TouchableOpacity>
);

export default RocketCardView;
