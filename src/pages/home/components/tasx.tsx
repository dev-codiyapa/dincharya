import React from 'react';
import {View, Text} from 'react-native';
import {task as styles} from '../styles/task';

const Task = (): JSX.Element => {
  return (
    <View style={styles.conatiner}>
      <Text style={styles.haeding}>Today'ss tasks</Text>
    </View>
  );
};

export default Task;
