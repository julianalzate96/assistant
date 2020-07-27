import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, StatusBar} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {
  ScrollView,
  TextInput,
  TouchableOpacity,
} from 'react-native-gesture-handler';
import {colors} from '../../styles';
import {SEND} from '../../assets/svgs';
import {SvgXml} from 'react-native-svg';
import Message from '../../components/message';
import {connect} from 'react-redux';
import {sendMessage, _getMessages} from '../../services/chatServices';
import {newMessage} from '../../api/socket';

function Chat(props) {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    async function getMessages() {
      let res = await _getMessages(props.user.jwt, props.user.user.carrera.id);

      setMessages(res.data);
    }

    newMessage(props.user.user.carrera.id, () => {
      getMessages();
    });

    getMessages();
  }, []);

  const onMessage = () => {
    sendMessage(props.user.jwt, {
      mensaje: message,
      carrera: props.user.user.carrera.id,
      user: props.user.user.id
    }).then(res => console.log(res));

    setMessage("")
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>{props.user.user.carrera.nombre}</Text>
      </View>
      <View style={styles.body}>
        <ScrollView>
          {messages.map((message, i) => {
            return <Message message={message} user={props.user.user.id} />;
          })}
        </ScrollView>
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          multiline
          editable
          value={message}
          placeholder="Escribe un mensaje"
          onChangeText={text => setMessage(text)}
        />
        <TouchableOpacity onPress={onMessage}>
          <SvgXml height={25} width={25} fill={colors.green} xml={SEND} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
  },
  header: {
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.green,
  },
  body: {
    flex: 5.5,
    padding: '5%',
  },
  inputContainer: {
    paddingHorizontal: '5%',
    paddingVertical: '1%',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    flexDirection: 'row',
  },
  title: {
    color: 'white',
    fontSize: 25,
    textTransform: 'uppercase',
  },
  input: {
    backgroundColor: 'white',
    borderRadius: 20,
    width: '80%',
    paddingHorizontal: '5%',
    maxHeight: 90,
  },
});

const mapStateToProps = state => {
  return {
    user: state.user,
  };
};

export default connect(mapStateToProps)(Chat);
