import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Layout from '../../components/layout';
import Folder from '../../components/Folder';
import {getTypeOfSubjects} from '../../services/documentServices';

export default function Document(props) {
  const [type_subjects, seTypeOfTSubjects] = useState([]);

  useEffect(() => {
    async function handleGetTypesOfSubjects() {
      let res = await getTypeOfSubjects();

      seTypeOfTSubjects(res.data);
    }
    handleGetTypesOfSubjects();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tipo de Materia</Text>
      <View style={styles.wrapContainer}>
        {type_subjects.map((type, i) => {
          return (
            <Folder key={i} id={type.id} title={type.nombre} navigation={props.navigation} />
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '95%',
    justifyContent: 'center',
  },
  title: {
    textAlign: 'center',
    fontSize: 40,
  },
  wrapContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginVertical: '25%',
  },
});
