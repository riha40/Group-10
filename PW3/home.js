import * as React from 'react';
import { Button, View, Text, StyleSheet } from 'react-native';
import { useState } from 'react';

export default function HomeScreen({ navigation }) {
       const [counter, setCounter] = useState(0);
  return (
    <div>
    <View style={{ flex: 1, alignItems: 'top', justifyContent: 'top' }}>
      <Button 
        title="Go to list view"
        onPress={
          () => navigation.navigate('Second')
          }
      />
    </View>

 <View>

 <View></View>
 <Button title='Increase Counter'
 onPress={() => { setCounter(counter+1); }}
 />
 <Button title='Decrease Counter'
 onPress={() => { setCounter(counter-1); }}
 />
 </View>
  <Text> Counter value: {counter}</Text>
</div>
  );
}
