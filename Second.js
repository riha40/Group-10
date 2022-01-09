 import * as React from 'react';
import { Text, View, FlatList, StyleSheet, Switch, SafeAreaView, Button } from 'react-native';
import Constants from 'expo-constants';
import { useState } from 'react';

const data = new Array(10).fill(null).map((v, i) => ({ key: i.toString(), value: `John Doe ${i}` }));

export default function SecondScreen(props) {
  return (
 <View styles={styles.container}>
      <FlatList data={data} renderItem={({ item }) => <Text style={styles.item}>{item.value}</Text>} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  
   item: {
    margin: 3, 
    padding: 3,
    color: "black", 
    backgroundColor: "pink",
    textAlign: "center"
  }
});
