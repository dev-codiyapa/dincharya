import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import {categories as styles} from '../styles/home';

const Categories = (): JSX.Element => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Categories</Text>
      <ScrollView horizontal={true} style={styles.boxContainer}>
        <View style={styles.box}>
          <Text style={styles.tastInfo}>40 Task</Text>
          <Text style={styles.categoryInfo}>Business</Text>
        </View>
        <View style={styles.box}>
          <Text style={styles.tastInfo}>18 Task</Text>
          <Text style={styles.categoryInfo}>Personal</Text>
        </View>
        <View style={styles.box}>
          <Text style={styles.tastInfo}>18 Task</Text>
          <Text style={styles.categoryInfo}>Personal</Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default Categories;
