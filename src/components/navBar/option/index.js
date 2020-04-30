import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {colors} from '../../../styles';

export default function Option({title, active = false, setOption}) {
  return (
    <TouchableOpacity
      onPress={() => setOption()}
      style={[
        styles.option,
        {borderBottomColor: active ? colors.green : colors.gray},
      ]}>
      <Text
        style={[
          styles.optionTitle,
          {
            fontWeight: active ? 'bold' : 'medium',
            color: active ? colors.green : colors.gray,
          },
        ]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  option: {
    width: '33%',
    borderBottomWidth: 3,
    paddingVertical: '5%',
    alignItems: 'center',
  },
  optionTitle: {
    fontSize: 17,
  },
});
