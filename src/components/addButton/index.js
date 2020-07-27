import React from 'react';
import { View, TouchableOpacity, StyleSheet } from "react-native"
import { SvgXml } from 'react-native-svg';
import { PLUS } from "../../assets/svgs"

export default function AddButton(props) {
  return (
    <View style={styles.addBtn}>
      <TouchableOpacity onPress={props.action}>
        <SvgXml height={35} width={35} fill="white" xml={PLUS} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
    addBtn: {
        position: 'absolute',
        bottom: 30,
        right: 30,
        backgroundColor: '#33C1FF',
        height: 60,
        width: 60,
        borderRadius: 100,
        zIndex: 100,
        justifyContent: 'center',
        alignItems: 'center',
      },
})
