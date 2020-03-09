import React, {useState} from 'react';
import {View, Text, StyleSheet, Button, Image} from 'react-native';
import {TextInput, TouchableOpacity} from 'react-native-gesture-handler';
import {emailValidation, passwordValidation} from '../../functions/regex';

export default function Register(props) {
  const [email, setEmail] = useState({email: '', status: false});
  const [password, setPassword] = useState({password: '', status: false});
  const [logoSize, setLogoSize] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState({ password:'', status:false })

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
      status: (Cpassword === password.password) ? true : false,
    });
  }

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
        <View style={styles.form}>
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
          <TextInput
            style={styles.input}
            secureTextEntry={true}
            onChangeText={text => _handleSetPassword(text)}
            value={password.password}
            placeholder="Contraseña"
            onFocus={() => setLogoSize(true)}
            onBlur={() => setLogoSize(false)}
          />
          {!password.status && password.password.length > 0 && !logoSize && (
            <Text style={styles.alert}>
              La contraseña debe tener un mínimo de 8 caracteres.
            </Text>
          )}
          <TextInput
            style={styles.input}
            secureTextEntry={true}
            onChangeText={text => _handleSetConfirmPassword(text)}
            value={confirmPassword.password}
            placeholder="Confirmar Contraseña"
            onFocus={() => setLogoSize(true)}
            onBlur={() => setLogoSize(false)}
          />
          {  !confirmPassword.status && confirmPassword.password.length > 0 && !logoSize && (
            <Text style={styles.alert}>Las contraseñas no coinciden.</Text>
          )}
          <TextInput
            style={styles.input}
            onChangeText={text => _handleSetPassword(text)}
            // value={password.password}
            placeholder="Carrera"
            onFocus={() => setLogoSize(true)}
            onBlur={() => setLogoSize(false)}
          />
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Registrarse" color="#1a6844" />
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
    flex: 3,
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
  alert:{
    color:"red",
    fontSize:12
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
});
