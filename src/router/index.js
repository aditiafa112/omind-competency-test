import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Login} from '../pages';
// import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// import {BottomNavigator} from '../components';

const Stack = createStackNavigator();
// const Tap = createBottomTabNavigator();

// const MainApp = () => {
//   return (
//     <Tap.Navigator tabBar={(props) => <BottomNavigator {...props} />}>
//       <Tap.Screen name="Doctor" component={Doctor} />
//       <Tap.Screen name="Messages" component={Messages} />
//       <Tap.Screen name="Hospitals" component={Hospitals} />
//     </Tap.Navigator>
//   );
// };

const Router = () => {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen
        name="Login"
        component={Login}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default Router;
