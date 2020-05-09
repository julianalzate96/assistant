import React, {Fragment} from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Button, View, Text, StatusBar} from 'react-native';
import Home from '../views/Home';
import {SvgXml} from 'react-native-svg';
import {BURGER, QUESTIONS, CHAT, DOCUMENTS} from '../assets/svgs';
import {colors} from '../styles';

function SettingsScreen() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Settings!</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

function Screen({navigation}) {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused}) => {
          let iconName;
          let color;

          switch (route.name) {
            case 'Home2':
              iconName = QUESTIONS;
              break;
            case 'Chat':
              iconName = CHAT;
              break;
            case 'Documentos':
              iconName = DOCUMENTS;
              break;
            case 'We':
              iconName = QUESTIONS;
              break;
            default:
              iconName = BURGER;
          }

          color = focused ? colors.green : colors.gray;

          return <SvgXml height={20} width={20} fill={color} xml={iconName} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: colors.green,
        inactiveTintColor: colors.gray,
      }}>
      <Tab.Screen
        name="Home2"
        component={Home}
        options={{
          title: 'Preguntas',
          headerStyle: {
            backgroundColor: 'red',
          },
          headerTintColor: colors.green,
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />
      <Tab.Screen
        name="Chat"
        component={SettingsScreen}
        listeners={{
          tabPress: e => {
            e.preventDefault();
            alert('Seccion en Construccion');
          },
        }}
      />
      <Tab.Screen name="Documentos" component={SettingsScreen} />
      <Tab.Screen name="We" component={SettingsScreen} />
    </Tab.Navigator>
  );
}

function NotificationsScreen({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Button onPress={() => navigation.goBack()} title="Go back home" />
    </View>
  );
}

const Drawer = createDrawerNavigator();

export default function DrawerContainer() {
  return (
    <Fragment>
      <StatusBar
        backgroundColor="transparent"
        translucent
        barStyle="dark-content"
      />
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={Screen} />
        <Drawer.Screen name="Notifications" component={NotificationsScreen} />
      </Drawer.Navigator>
    </Fragment>
  );
}
