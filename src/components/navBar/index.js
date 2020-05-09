import React, {useContext} from 'react';
import {View, StyleSheet} from 'react-native';
import Option from './option';
import { QuestionsContext } from '../../context/context';

export default function NavBar({getSection}) {
  const { option, setOption } = useContext(QuestionsContext)

  return (
    <View style={styles.container}>
      <Option
        title="Pre Generales"
        active={option === 1 ? true : false}
        setOption={() => setOption(1)}
      />
      <Option
        title="Mis Preguntas"
        active={option === 2 ? true : false}
        setOption={() => setOption(2)}
      />
      <Option
        title="Por Carrera"
        active={option === 3 ? true : false}
        setOption={() => setOption(3)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
