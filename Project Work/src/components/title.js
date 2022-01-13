import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default function Title({text, length}) {
  return (
    <View style={styles.titleView}>
      <Text style={styles.title}>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  titleView: {
    paddingHorizontal: '8%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: 'black',
    marginTop: 15,
    marginBottom: 20,
  },
});
