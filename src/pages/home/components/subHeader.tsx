import React from 'react';
import {View, Text} from 'react-native';
import {home as styles} from '../styles/home';

const SubHeader = (): JSX.Element => {
  return (
    <View style={styles.subheading}>
      <Text style={styles.subheadingText}>What's up, Murari !</Text>
    </View>
  );
};

export default SubHeader;
