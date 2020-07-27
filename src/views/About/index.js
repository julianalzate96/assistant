import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Developer from '../../components/developer';

export default function AboutUs() {
  const developers = [
    {
      name: 'Julian Alzate',
      email: 'andres_Alzate82142@elpoli.edu.co',
      age: '24',
      image: require('../../assets/T3ELXGHUM-UKA29356C-b305d00da7e5-512.jpg')
    },
    {
      name: 'Francisco Javier Gomez Quintero',
      email: 'francisco_gomez82131@elpoli.edu.co',
      age: '24',
      image: require('../../assets/pacho.jpeg')
    },
  ];
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Acerca de Nosotros</Text>
      </View>
      <View style={styles.developersContainer}>
        {developers.map((developer, i) => (
          <Developer key={i} developer={developer} />
        ))}
      </View>
      <View style={styles.descriptionContainer}>
        <Text style={styles.text}>
          Este aplicacion movil fue desarrollada con react native en el frontend
          y con strapi (NodeJS) en el backend, para la materia Proyecto
          Integrador dictada por el Profesor Ricardo Isaza
        </Text>
        <Text>Politecnico Colombiano Jaime Isaza Cadavid</Text>
        <Text>15 Junio 2020</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  developersContainer: {
    flex: 3.5,
  },
  descriptionContainer: {
    flex: 2,
    justifyContent:"space-evenly",
    alignItems:"center",
    paddingHorizontal:"5%"
  },
  titleContainer: {
    flex: 0.5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 30,
  },
  text:{
    textAlign:"center"
  }
});
