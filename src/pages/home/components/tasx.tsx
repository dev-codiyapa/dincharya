import React from 'react';
import {View, Text} from 'react-native';
import {task as styles} from '../styles/task';
// import RadioButton from '../../../common/radio-button/RadionButton.component';

const Task = (): JSX.Element => {
  return (
    <View style={styles.conatiner}>
      <Text style={styles.haeding}>Today'ss tasks</Text>
      <View>
        <View style={styles.taskBox}>
          <Text style={styles.taskText}>Daily meeting with team</Text>
        </View>
        <View style={styles.taskBox}>
          <Text style={styles.taskText}>Daily meeting with team</Text>
        </View>
        <View style={styles.taskBox}>
          <Text style={styles.taskText}>Daily meeting with team</Text>
        </View>
        <View style={styles.taskBox}>
          <Text style={styles.taskText}>Daily meeting with team</Text>
        </View>
        {/* <RadioButton /> */}
      </View>
    </View>
  );
};

export default Task;
