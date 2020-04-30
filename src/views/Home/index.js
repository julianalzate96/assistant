import React, {useEffect} from 'react';
import {Text ,View } from 'react-native';
import Layout from '../../components/layout';
import {connect} from 'react-redux';
import {TouchableOpacity} from 'react-native-gesture-handler';
import SearchBar from '../../components/searchBar.js';
import NavBar from '../../components/navBar';

function Home(props) {

  useEffect(() => {
    console.log("HOLA!!")
  }, [])

  return (
    <Layout navigation={props.navigation} title="preguntas">
     {/* <SearchBar /> */}
     <NavBar />
     <View style={{ flex:2 }}>

     </View>
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
