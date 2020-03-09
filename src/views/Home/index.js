import React, {useEffect} from 'react';
import {Text, BackHandler} from 'react-native';
import Layout from '../../components/layout';
import {connect} from 'react-redux';
import {TouchableOpacity} from 'react-native-gesture-handler';

function Home(props) {

  useEffect(() => {
    console.log("HOLA!!")
  }, [])

  return (
    <Layout navigation={props.navigation} title="Home">
      <Text>{props.user.data.name}</Text>
      <Text>{props.user.data.lastname}</Text>
      <TouchableOpacity
        style={{height: 50, width: 100, backgroundColor: 'red'}}
        onPress={() => {
          props.setName(1);
        }}></TouchableOpacity>
      <TouchableOpacity
        style={{height: 50, width: 100, backgroundColor: 'blue'}}
        onPress={() => {
          props.setLastName(1);
        }}></TouchableOpacity>
    </Layout>
  );
}

const mapStateToProps = state => {
  return {
    user: state.user,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setName: name => {
      dispatch({type: 'SET_NAME', payload: name});
    },
    setLastName: name => {
      dispatch({type: 'SET_LASTNAME', payload: name});
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
