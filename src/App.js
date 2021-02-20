import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import 'react-native-gesture-handler';
import Router from './router';
import {Provider} from 'react-redux';
import store from './redux/stores';
import {StatusBar} from 'react-native';
import {colors} from './utils';

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <StatusBar
          backgroundColor={colors.background.primary}
          barStyle="dark-content"
        />
        <Router />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
