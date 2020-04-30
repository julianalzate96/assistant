import React, {useState} from 'react';
import {View, Text, StyleSheet, Button, Image} from 'react-native';
import {
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native-gesture-handler';
import {emailValidation, passwordValidation} from '../../functions/regex';
import { colors } from '../../styles';

export default function Register(props) {
  const [email, setEmail] = useState({email: '', status: false});
  const [password, setPassword] = useState({password: '', status: false});
  const [logoSize, setLogoSize] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState({
    password: '',
    status: false,
  });
  const [buttonState, setButtonState] = useState(true);
  const [carrera, setCarrera] = useState('');

  //TEST ARRAY
  const array = [
    'Ing Informatica',
    'Ing Civil',
    'Ing Agropecuaria',
    'Instrumentacion y control',
    'ai',
    'bi',
    'ci',
  ];

  const _handleSetEmail = email => {
    setEmail({
      email,
      status: emailValidation(email),
    });
  };

  const _handleSetPassword = password => {
    setPassword({
      password,
      status: passwordValidation(password),
    });
  };

  const _handleSetConfirmPassword = Cpassword => {
    setConfirmPassword({
      password: Cpassword,
      status: Cpassword === password.password ? true : false,
    });
  };

  const _handleSetCarrera = carrera => {
    setCarrera(carrera);
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
        <View
          style={[
            styles.form,
            buttonState && {justifyContent: 'space-evenly'},
          ]}>
          {buttonState && (
            <TextInput
              style={[styles.input, {color: !email.status ? 'red' : 'black'}]}
              autoCompleteType="email"
              autoCorrect={false}
              keyboardType="email-address"
              onChangeText={text => _handleSetEmail(text)}
              placeholder="Correo institucional"
              value={email.email}
              onFocus={() => setLogoSize(true)}
              onBlur={() => setLogoSize(false)}
            />
          )}

          {buttonState && (
            <TextInput
              style={styles.input}
              secureTextEntry={true}
              onChangeText={text => _handleSetPassword(text)}
              value={password.password}
              placeholder="Contraseña"
              onFocus={() => setLogoSize(true)}
              onBlur={() => setLogoSize(false)}
            />
          )}
          {!password.status && password.password.length > 0 && !logoSize && (
            <Text style={styles.alert}>
              La contraseña debe tener un mínimo de 8 caracteres.
            </Text>
          )}
          {buttonState && (
            <TextInput
              style={styles.input}
              secureTextEntry={true}
              onChangeText={text => _handleSetConfirmPassword(text)}
              value={confirmPassword.password}
              placeholder="Confirmar Contraseña"
              onFocus={() => setLogoSize(true)}
              onBlur={() => setLogoSize(false)}
            />
          )}
          {!confirmPassword.status &&
            confirmPassword.password.length > 0 &&
            !logoSize && (
              <Text style={styles.alert}>Las contraseñas no coinciden.</Text>
            )}
          <TextInput
            style={styles.input}
            onChangeText={text => _handleSetCarrera(text)}
            value={carrera}
            placeholder="Carrera"
            onFocus={() => {
              setLogoSize(true);
              setButtonState(false);
            }}
            onBlur={() => {
              setLogoSize(false);
              setButtonState(true);
            }}
          />
          {!buttonState && carrera.length > 0 && (
            <ScrollView style={styles.optionsContainer}>
              {array
                .filter(
                  item =>
                    item
                      .toLowerCase()
                      .slice(0, 3)
                      .indexOf(carrera.toLowerCase()) !== -1,
                )
                .map((carrera, i) => {
                  return (
                    <TouchableOpacity
                      key={i}
                      onPress={() => setCarrera(carrera)}
                      style={styles.option}>
                      <Text>{carrera}</Text>
                    </TouchableOpacity>
                  );
                })}
            </ScrollView>
          )}
        </View>
      </View>
      {buttonState && (
        <View style={styles.buttonContainer}>
          <Button title="Registrarse" color="" />
        </View>
      )}
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
    flex: 3,
    alignItems: 'center',
    justifyContent: 'center',
  },
  form: {
    width: '80%',
    height: '100%',
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: colors.green,
    padding: 0,
  },
  alert: {
    color: 'red',
    fontSize: 12,
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'space-around',
    paddingHorizontal: '10%',
  },
  textContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  optionsContainer: {
    backgroundColor: '#E9E9E9',
    padding: '5%',
  },
  option: {
    padding: '5%',
    borderBottomColor: 'green',
    borderBottomWidth: 1,
  },
});
