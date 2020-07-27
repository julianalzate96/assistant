import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {SvgXml} from 'react-native-svg';
import {FOLDER} from '../../assets/svgs';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {setTypeDocument} from '../../redux/actions/actionCreator';

function Folder({id, title, navigation, setType}) {
  const onPress = () => {
    setType(id);
    navigation.navigate('common');
  };
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <SvgXml height={125} width={125} fill="black" xml={FOLDER} />
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '45%',
    marginBottom: '5%',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
    height: 50,
    justifyContent: 'center',
  },
});

Folder.propTypes = {
  title: PropTypes.string,
};

Folder.defaultProps = {
  title: '',
};

const mapDispatchToProps = dispatch => {
  return {
    setType: id => {
      dispatch(setTypeDocument(id));
    },
  };
};

export default connect(
  null,
  mapDispatchToProps,
)(Folder);
