import React from 'react';
import {View, Image} from 'react-native';
import {header as styles} from './styles/header';

const Header = (): JSX.Element => {
  return (
    <View style={styles.container}>
      <Image source={require('../../assets/icons/menu.png')} />
      <View style={styles.leftContainer}>
        <Image source={require('../../assets/icons/search.png')} />
        <Image
          source={require('../../assets/icons/notification.png')}
          style={styles.notification}
        />
      </View>
    </View>
  );
};

export default Header;
