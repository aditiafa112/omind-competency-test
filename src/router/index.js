import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Splash, Login, Home, Live, Discussion, Profile} from '../pages';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {BottomNavigator} from '../components';

const Stack = createStackNavigator();
const Tap = createBottomTabNavigator();

const MainApp = () => {
  return (
    <Tap.Navigator tabBar={(props) => <BottomNavigator {...props} />}>
      <Tap.Screen name="Home" component={Home} />
      <Tap.Screen name="Live" component={Live} />
      <Tap.Screen name="Diskusi" component={Discussion} />
      <Tap.Screen name="Profil" component={Profile} />
    </Tap.Navigator>
  );
};

const Router = () => {
  return (
    <Stack.Navigator initialRouteName="Splash">
      <Stack.Screen
        name="Splash"
        component={Splash}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="MainApp"
        component={MainApp}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default Router;
