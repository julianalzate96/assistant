import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {SvgXml} from 'react-native-svg';
import {BURGER} from '../../assets/svgs';
import {TouchableOpacity} from 'react-native-gesture-handler';

export default function Header({title, navigation}) {
  return (
    <View style={styles.header}>
      <View style={styles.container}>
        <View style={styles.burgerContainer}>
          <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
            <SvgXml height={25} width={25} fill="white" xml={BURGER} />
          </TouchableOpacity>
        </View>

        <View style={styles.titleContainer}>
          <Text style={styles.title}>{title}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {backgroundColor: '#1a6844', height: 45, justifyContent: 'center'},
  container: {flexDirection: 'row', height: '100%'},
  burgerContainer: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    paddingHorizontal: '5%',
    justifyContent: 'center',
    zIndex:100
  },
  titleContainer: {
    alignItems: 'center',
    width: '100%',
    justifyContent: 'center',
  },
  title:{
    color:"white",
    fontSize:25,
    textTransform:"uppercase"
  }
});
