import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import PropTypes from 'prop-types';

export default function InputContainer({placeholder, buttonText, send}) {
  const [state, setState] = useState('');
  return (
    <View style={styles.container}>
      <TextInput
        multiline={true}
        style={styles.input}
        placeholder={placeholder}
        onChangeText={text => {
          setState(text);
        }}
      />
      <TouchableOpacity onPress={() => send(state)} style={styles.button}>
        <Text>{buttonText}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  input: {
    width: '80%',
    borderWidth: 1,
    borderRadius: 10,
    maxHeight: 110,
  },
  button: {
    width: '18%',
    borderWidth: 1,
    height: 50,
  },
});

InputContainer.propTypes = {
  placeholder: PropTypes.string,
  buttonText: PropTypes.string,
  send: PropTypes.func,
};

InputContainer.defaultProps = {
  placeholder: 'Text here',
  buttonText: 'Send',
  send: () => {},
};
