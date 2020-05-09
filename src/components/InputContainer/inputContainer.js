import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import {colors} from '../../styles';
import PropTypes from 'prop-types';
import {SvgXml} from 'react-native-svg';
import { ADD } from "../../assets/svgs"

export default function InputContainer({placeholder, buttonText, send, icon}) {
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
        value={state}
      />
      <TouchableOpacity
        onPress={() => {
          send(state);
          setState('');
        }}
        style={styles.button}>
        <SvgXml height={45} width={45} fill={colors.green} xml={icon} />
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
    borderBottomWidth: 2,
    borderColor: colors.green,
    maxHeight: 110,
  },
  button: {
    width: '18%',
    height: 50,
    justifyContent:"center",
    alignItems:"center"
  },
});

InputContainer.propTypes = {
  placeholder: PropTypes.string,
  buttonText: PropTypes.string,
  send: PropTypes.func,
  icon: PropTypes.string
};

InputContainer.defaultProps = {
  placeholder: 'Text here',
  buttonText: 'Send',
  send: () => {},
  icon: ADD
};
