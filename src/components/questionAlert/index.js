import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';
import {SvgXml} from 'react-native-svg';
import {ALERT} from '../../assets/svgs';

export default function QuestionAlert({text}) {
  return (
    <View style={styles.container}>
      <SvgXml style={{ marginBottom:"5%" }}  height={50} width={50} fill="red" xml={ALERT} />
      <Text style={styles.text}>Lo Sentimos</Text>
      <Text style={[styles.text, { width:"70%" }]}>{text}.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    height: 600,
    justifyContent: 'center',
  },
  text: {
    fontSize: 18,
    textAlign:"center"
  },
});

QuestionAlert.propTypes = {
  text: PropTypes.string,
};

QuestionAlert.defaultProps = {
  text: 'No hay preguntas',
};
