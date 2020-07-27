import React, {useState} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import Modal from 'react-native-modal';
import {TextInput} from 'react-native-gesture-handler';
import {createQuestion} from '../../../services/questionServices';
import {connect} from 'react-redux';

function AddQuestion(props) {
  const [question, setQuestion] = useState('');
  const onUploadQuestion = () => {
    createQuestion(props.user.jwt, {
      user: props.user.user._id,
      descripcion: question,
    }).then(res => {
      if (res.status === 400) {
        alert(res.message);
      } else {
        setQuestion('');
        props.toggleModal();
      }
    });
  };

  return (
    <View>
      <Modal
        isVisible={true}
        backdropOpacity={0}
        onBackdropPress={() => {
          props.toggleModal();
        }}
        coverScreen
        animationIn="zoomInUp"
        animationOut="zoomOutUp">
        <View style={styles.modal}>
          <View>
            <Text style={styles.title}>Agrega una Pregunta </Text>
            <TextInput
              style={styles.input}
              placeholder="Escribe aqui tu pregunta"
              multiline
              onChangeText={text => setQuestion(text)}
            />
          </View>
          <Button title="SUBIR" color="#33C1FF" onPress={onUploadQuestion} />
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  modal: {
    height: '50%',
    backgroundColor: 'white',
    width: '100%',
    alignSelf: 'center',
    borderRadius: 10,
    paddingHorizontal: '5%',
    paddingTop: '5%',
    justifyContent: 'space-between',
    borderWidth: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  input: {
    borderBottomColor: 'gray',
    borderBottomWidth: 1,
    maxHeight: 150,
  },
});

const mapStateToProps = state => {
  return {
    user: state.user,
  };
};

export default connect(mapStateToProps)(AddQuestion);
