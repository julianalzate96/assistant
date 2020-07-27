import React, {useState} from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {colors} from '../../styles';
import PropTypes from 'prop-types';

export default function Developer({developer }) {
  const {name, email, age} = developer;
  const [showDescription, setState] = useState(true);

  const handleShowDescription = () => {
    setState(!showDescription);
  };

  return (
    <TouchableOpacity style={styles.container} onPress={handleShowDescription}>
      <Image
        style={showDescription ? styles.bigImage : styles.image}
        source={developer.image}
      />
      {!showDescription && (
        <View style={styles.infoContainer}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.text}>{email}</Text>
          <Text style={styles.text}>{age} años</Text>
        </View>
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: '2%',
    justifyContent: 'space-evenly',
  },
  image: {
    height: 80,
    width: 80,
    borderRadius: 100,
  },
  bigImage: {
    height: 150,
    width: 150,
    borderRadius: 100,
    borderWidth: 1,
  },
  infoContainer: {
    justifyContent: 'space-evenly',
    height: '50%',
  },
  name: {
    fontSize: 17,
    fontWeight: 'bold',
    color: colors.green,
  },
  text: {
    fontSize: 16,
  },
});

Developer.propTypes = {
  developer: PropTypes.object,
};

Developer.defaulProps = {
  developer: {
    name: '',
    email: '',
    age: '',
  },
};
