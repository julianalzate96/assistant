import React, {useState, useEffect} from 'react';
import Modal from 'react-native-modal';
import {View, StyleSheet, Text} from 'react-native';
import InputContainer from '../../InputContainer/inputContainer';
import Answers from './Answers/answers';
import {createAnswer} from '../../../services/answerServices';
import {connect} from 'react-redux';

function QuestionInfo(props) {
  return (
    <View>
      <Modal
        isVisible={props.questionInfo.status}
        backdropOpacity={0.4}
        onBackdropPress={() => {
          props.toggleModal();
        }}
        coverScreen
        animationIn="zoomInUp"
        animationOut="zoomOutUp">
        <View style={styles.modal}>
          <Answers answers={props.questionInfo.answers} />
          <InputContainer
            placeholder="Escribe tu Pregunta Aqui."
            send={answer => {
              createAnswer(
                props.questionInfo.idQuestion,
                answer,
                props.user.user._id,
                props.user.jwt,
              )
                .then(async res => {
                  console.log('SENT!');
                })
                .catch(err => alert(JSON.stringify(err)));
            }}
          />
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  modal: {
    height: '90%',
    backgroundColor: 'white',
    width: '100%',
    alignSelf: 'center',
    borderRadius: 10,
    paddingHorizontal:"5%",
    paddingTop:"5%",
    justifyContent: 'space-between',
    borderWidth:1
  },
});

const mapStateToProps = state => {
  return {
    user: state.user,
    questionInfo: state.question,
  };
};

export default connect(mapStateToProps)(QuestionInfo);
