import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {radio as styles} from './styles/radio';

const options = [
  {
    key: 'pay',
    text: 'Most High Pay',
  },
  {
    key: 'performance',
    text: 'Most Perfomance',
  },
  {
    key: 'aToZ',
    text: 'A - Z',
  },
  {
    key: 'zToA',
    text: 'Z - A',
  },
];

const RadioButton = (): JSX.Element => {
  const [selectedValue, SetValue] = useState('');
  return (
    <Text>
      {options.map((item) => {
        return (
          <View key={item.key} style={styles.buttonContainer}>
            <Text>{item.text}</Text>
            <TouchableOpacity
              style={styles.circle}
              onPress={() => SetValue(item.key)} // we set our value state to key
            >
              <Text>
                {selectedValue === item.key && (
                  <View style={styles.checkedCircle} />
                )}{' '}
              </Text>
            </TouchableOpacity>
          </View>
        );
      })}
      ;
    </Text>
  );
};

export default RadioButton;
