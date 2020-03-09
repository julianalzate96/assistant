import React, {useState} from 'react';
import {View, Text, StyleSheet, Button, Image} from 'react-native';
import {TextInput, TouchableOpacity} from 'react-native-gesture-handler';
import {emailValidation} from '../../functions/regex';

export default function ResetPassword(props) {
  const [email, setEmail] = useState({email: '', status: false});
  const [logoSize, setLogoSize] = useState(false);
  const [alert, setAlert] = useState(false);

  const _handleSetEmail = email => {
    setEmail({
      email,
      status: emailValidation(email),
    });
  };

  const _handleSubmit = () => {
    if (email.status) {
      // handle ResetPasswordMethod
      if (false) {
        setAlert(false);
      } else {
        setAlert(true);
      }
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <View style={styles.logo}>
          <Image
            source={require('../../assets/escudo_poli.jpg')}
            style={
              logoSize ? {height: 130, width: 235} : {height: 155, width: 280}
            }
          />
        </View>
      </View>
      <View style={styles.formContainer}>
        <View>
          <Text>Introduce tu correo electronico de recuperacion.</Text>
        </View>
        <View style={styles.form}>
          <TextInput
            style={[styles.input, {color: email.status ? 'black' : 'red'}]}
            autoCompleteType="email"
            autoCorrect={false}
            keyboardType="email-address"
            onChangeText={text => _handleSetEmail(text)}
            placeholder="Correo institucional"
            value={email.email}
            onFocus={() => setLogoSize(true)}
            onBlur={() => setLogoSize(false)}
          />
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <Button
          title="Restaurar Contraseña"
          color="#1a6844"
          onPress={() => _handleSubmit()}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  logoContainer: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    backgroundColor: 'green',
  },
  formContainer: {
    flex: 1.5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  form: {
    width: '80%',
    height: '100%',
    justifyContent: 'space-evenly',
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: '#1a6844',
    padding: 0,
  },
  alert: {
    backgroundColor: '#FE8787',
    borderWidth: 2,
    borderColor: 'red',
    width: '80%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textAlert: {
    color: '#B51111',
  },
  buttonContainer: {
    flex: 1.5,
    justifyContent: 'space-evenly',
    paddingHorizontal: '10%',
  },
  textContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  link: {
    color: 'green',
  },
});
