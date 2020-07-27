import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {SvgXml} from 'react-native-svg';
import {FOLDER} from '../../assets/svgs';
import {TouchableOpacity} from 'react-native-gesture-handler';

export default function ArrowHeader(props) {
  return (
    <View style={styles.header}>
      <TouchableOpacity onPress={()=> props.goBack() }>
        <SvgXml height={35} width={35} xml={FOLDER} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    paddingHorizontal: '2%',
    paddingTop:"5%"
  },
});
