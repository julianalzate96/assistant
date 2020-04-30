import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {_getData} from '../../functions/session';

export default class Loading extends Component {
  componentDidMount = async () => {
    var bool = await _getData();
    if (bool) {
      this.props.navigation.navigate('App');
    } else {
      this.props.navigation.navigate('Login');
    }
  };

  render() {
    return (
      <View>
        <Text>Loading ...</Text>
      </View>
    );
  }
}
