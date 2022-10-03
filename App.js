//import 'react-native-gesture-handler';
import React from 'react';
import {StatusBar} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {Intro, Home, Details} from './screens';

const MainStack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar barStyle="light-content" />
      <MainStack.Navigator
        initialRouteName="Intro"
        screenOptions={{headerShown: false}}>
        <MainStack.Screen name="Intro" component={Intro} />
        <MainStack.Screen name="Home" component={Home} />
        <MainStack.Screen name="Details" component={Details} />
      </MainStack.Navigator>
    </NavigationContainer>
  );
};

export default App;
