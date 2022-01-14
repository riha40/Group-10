import 'react-native-gesture-handler';
import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import HomeScreen from './components/home';
import SecondScreen from './components/second';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'React Application' }}/>
        <Stack.Screen name="Second" component={SecondScreen} options={{ title: 'List View' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
