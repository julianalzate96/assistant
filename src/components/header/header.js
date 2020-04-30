import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {SvgXml} from 'react-native-svg';
import {BURGER} from '../../assets/svgs';
import {TouchableOpacity} from 'react-native-gesture-handler';
import SearchBar from '../searchBar.js';
import { colors } from '../../styles';

export default function Header({navigation, type}) {
  return (
    <View style={styles.header}>
      <View style={styles.container}>
        <View style={styles.burgerContainer}>
          <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
            <SvgXml height={25} width={25} fill={colors.green} xml={BURGER} />
          </TouchableOpacity>
        </View>
        <SearchBar type={type}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: 'transparent',
    height: 60,
    marginTop:25,
    justifyContent: 'center'
    
  },
  container: {flexDirection: 'row', height: '100%', alignItems:"center"},
  burgerContainer: {
    justifyContent: 'center',
    zIndex: 100,
    paddingHorizontal:"5%"
  },
});
