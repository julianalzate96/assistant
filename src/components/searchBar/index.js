import React, { useEffect } from 'react';
import {View, StyleSheet, TextInput} from 'react-native';
import {SvgXml} from 'react-native-svg';
import {LUPA} from '../../assets/svgs';
import {connect} from 'react-redux';
import {_setFilter} from '../../redux/actions/actionCreator';
import PropTypes from 'prop-types';

function SearchBar(props) {
  return (
    <View style={styles.container}>
      <View style={{width: '5%'}}>
        <SvgXml height={20} width={20} fill="gray" xml={LUPA} />
      </View>
      <TextInput
        style={styles.input}
        placeholder={`Buscar ${
          props.placeholder
            ? props.placeholder
            : props.type
            ? 'pregunta'
            : 'asignatura'
        }`}
        onChangeText={text => props.setFilter(text.toLowerCase())}
        value={props.filter}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '70%',
    height: '75%',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 50,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  input: {
    width: '85%',
    textTransform: 'capitalize',
  },
});

const mapStateToProps = state => ({
  filter: state.filter,
});

const mapDispatchToProps = dispatch => ({
  setFilter: text => {
    dispatch(_setFilter(text));
  },
});

SearchBar.propTypes = {
  type: PropTypes.bool,
  placeholder: PropTypes.string,
};

SearchBar.defaultProps = {
  type: false,
  placeholder: null,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SearchBar);
