import 'react-native-gesture-handler';
import React from 'react';
import {View} from 'react-native';
import StackNavigator from './src/navigation/stack';

const App = () => {
  return (
      <View style={{flex: 1}}>
        <StackNavigator />
      </View>
  );
};
export default App;
