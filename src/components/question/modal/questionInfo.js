import React, {useState, useEffect} from 'react';
import Modal from 'react-native-modal';
import {View, StyleSheet, Text} from 'react-native';
import InputContainer from '../../InputContainer/inputContainer';
import Answers from './Answers/answers';
import {createAnswer} from '../../../services/answerServices';
import {connect} from 'react-redux';

function QuestionInfo(props) {
  const [loading, setLoading] = useState(false);
  alert(JSON.stringify(props.questionInfo.answers))
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
          {!loading && <Answers answers={props.questionInfo.answers} />}
          {loading && (
            <View style={{height: '90%'}}>
              <Text>Loading...</Text>
            </View>
          )}
          <InputContainer
            send={answer => {
              setLoading(true);
              createAnswer(
                props.questionInfo.idQuestion,
                answer,
                props.user.user._id,
                props.user.jwt,
              )
                .then(async res => {
                  setLoading(false);
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
    padding: '5%',
    justifyContent: 'space-between',
  },
});

const mapStateToProps = state => {
  return {
    user: state.user,
    questionInfo: state.question,
  };
};

export default connect(mapStateToProps)(QuestionInfo);
