import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {colors} from '../../styles';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {_storeData} from '../../functions/session';
import {connect} from 'react-redux';
import {setUser} from '../../redux/actions/actionCreator';

export default function Menu(props) {
  const onLogout = async () => {
    console.log(props);
    props.resetUser();
    await _storeData(null);
    props.navigation.navigate('Auth');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.profile}>
        <Image
          style={styles.avatar}
          source={require('../../assets/T3ELXGHUM-UKA29356C-b305d00da7e5-512.jpg')}
        />
        <Text style={[styles.text, {color: colors.green}]}>
          andres_alzate82142
        </Text>
        <Text style={styles.text}>Ingenieria Informatica</Text>
        <Text style={styles.text}>24 años</Text>
      </View>
      <TouchableOpacity style={styles.logout} onPress={onLogout}>
        <Text style={styles.logoutBtn}>Logout</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
  logout: {
    padding: '5%',
    alignItems: 'flex-end',
  },
  avatar: {
    height: 200,
    width: 200,
    alignSelf: 'center',
    borderRadius: 150,
    marginVertical: '5%',
  },
  text: {
    fontSize: 19,
    textAlign: 'center',
    marginBottom: '5%',
  },
  logoutBtn: {
    color: 'red',
  },
});

// const mapStateToProps = state => {
//   return {
//     user: state.user
//   }
// }

// const mapDispatchToProps = dispatch => {
//   return {
//     resetUser: () => {
//       dispatch(setUser());
//     },
//   };
// };

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps,
// )(Menu);
