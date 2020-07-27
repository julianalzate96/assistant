import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {SvgXml} from 'react-native-svg';
import {DOCUMENT} from '../../assets/svgs';

export default function Document(props) {
  return (
    <View style={styles.document}>
      <SvgXml height={80} width={80} xml={DOCUMENT} />
      <Text style={styles.name}>{props.document.titulo}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  document: {
    height: 150,
    width: '33.3%',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  name:{
    textAlign:"center"
  }
});
