import React from 'react';
import PropTypes from 'prop-types';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

export default function Question({question, setQuestionInfo}) {
  return (
    <TouchableOpacity
      onPress={() => setQuestionInfo()}
      style={styles.container}>
      <Text style={styles.username}>{question.user.username}</Text>
      <Text style={styles.description}>{question.descripcion}</Text>
      <Text style={styles.answers}>
        Respuestas: {question.respuestas.length}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: '5%',
    padding: '5%',
    backgroundColor: '#E8E5E5',
  },
  username: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  description: {
    fontSize: 18,
  },
  answers: {
    fontSize: 12,
    textAlign: 'right',
  },
});

Question.propTypes = {
  question: PropTypes.object,
  setQuestionInfo: PropTypes.func,
};

Question.defaultProps = {
  question: {
    user: {username: ''},
    descripcion: '',
    respuestas: [],
  },
  setQuestionInfo: () => {},
};
