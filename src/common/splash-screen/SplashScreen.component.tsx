import React from 'react';
import {View, Image} from 'react-native';
import {splash as style} from './styles/splash';

const SplashScreen = (): JSX.Element => {
  return (
    <View style={style.container}>
      <Image source={require('../../assets/images/to-do-list-128.png')} />
    </View>
  );
};

export default SplashScreen;
