import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';
import {_getUser} from '../../../../services/userServices';
import {formatTheDate} from '../../../../functions/common';

export default function Answer({answer}) {
  const [author, setAuthor] = useState('UNKNOW');
  const [date, setDate] = useState('0/0/0');
  useEffect(() => {
    async function getAuthor() {
      let res = await _getUser(answer.user);

      if (res.status === 200) {
        setAuthor(res.data.username);
      } else {
        alert('ERROR AL CONSULTAR EL AUTOR!');
      }
    }
    async function getDateFormatted() {
      setDate(formatTheDate(answer.createdAt));
    }

    getAuthor();
    getDateFormatted();
  }, []);
  return (
    <View style={styles.container}>
      <Text style={styles.date}>{date}</Text>
      <Text style={styles.description}>{answer.descripcion}</Text>
      <Text style={styles.author}>Por: {author}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: '5%',
    padding: '5%',
    backgroundColor: '#E8E5E5',
    borderRadius: 10,
  },
  author: {
    fontWeight: 'bold',
    fontSize: 14,
  },
  description: {
    fontSize: 16,
  },
  date: {
    fontSize: 10,
    textAlign: 'right',
  },
});

Answer.propTypes = {
  answer: PropTypes.object,
};

Answer.defaultProps = {
  answer: {
    user: {},
    descripcion: '',
  },
};
