import React, { useState, useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default function Message(props) {
  const [time, setTime] = useState("")
  useEffect(() => {
    function getTime() {
      let date = props.message.createdAt.split('T');
      let time = date[1].split('.');
      setTime(time[0])
    }

    getTime()
  }, []);
  const getRandomColor = () => {
    return (
      'rgb(' +
      Math.floor(Math.random() * 256) +
      ',' +
      Math.floor(Math.random() * 256) +
      ',' +
      Math.floor(Math.random() * 256) +
      ')'
    );
  };
  return (
    <View style={styles.container}>
      <View
        style={[
          styles.message,
          {
            alignSelf: props.user === props.message.user.id ? 'flex-end' : 'flex-start',
          },
        ]}>
        <Text style={[styles.name, {color: getRandomColor()}]}>{props.message.user.username}</Text>
        <Text>
          {props.message.mensaje}
      <Text style={styles.date}> {time}</Text>
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: '3%',
  },
  message: {
    backgroundColor: 'white',
    maxWidth: '90%',
    paddingVertical: '2%',
    paddingHorizontal: '5%',
    borderRadius: 15,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  date: {
    fontSize: 12,
    fontWeight: 'bold',
  },
});
