import React from 'react';
import {View} from 'react-native';
import Header from '../header';

export default function Layout({navigation, title, children}) {
  return (
    <View style={{ flex:1 }}>
      <Header title={title} navigation={navigation} type={title === "preguntas" ? true : false}/>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        {children}
      </View>
    </View>
  );
}
