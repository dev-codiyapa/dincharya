import React from 'react';
import {View} from 'react-native';
import {home as styles} from './styles/home';
import Header from '../../common/header/Header.component';
import SubHeader from './components/subHeader';
import Categories from './components/categories';
import Task from './components/tasx';

const Home = (): JSX.Element => {
  return (
    <View style={styles.container}>
      <Header />
      <SubHeader />
      <Categories />
      <Task />
    </View>
  );
};

export default Home;
