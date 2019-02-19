import React from 'react';
import { View, Text } from 'react-native';

import styles from './informationItemStyles';

/* Props
* ------------------------------------------------
*   @prop { type }    name                - Description....
*/

const InformationItem = ({
  label, text,
}) => (
  <View style={styles.container}>
    <Text style={styles.label}>{label || 'label'}</Text>
    <Text style={styles.text}>{text || 'text'}</Text>
  </View>
);

export default InformationItem;
