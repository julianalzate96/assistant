import React, { useEffect } from 'react';
import {View} from 'react-native';
import PropTypes from 'prop-types';
import Answer from './answer';
import {ScrollView} from 'react-native-gesture-handler';

export default function Answers({answers}) {
  return (
    <ScrollView style={{height: '90%'}}>
      {answers.map((answer, i) => {
        return <Answer key={i} answer={answer} />;
      })}
    </ScrollView>
  );
}

Answers.propTypes = {
  answers: PropTypes.array,
};
Answers.defaultProps = {
  answers: [],
};
