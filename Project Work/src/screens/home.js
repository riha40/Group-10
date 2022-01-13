import React from 'react';
import {View, StyleSheet, ScrollView, ActivityIndicator} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import {TextInput} from 'react-native-paper';
import Title from '../components/title';
import RecipeSection from '../components/recipeSection';
import {allRecipe} from '../shared/data';

export default function Home({navigation}) {
  return allRecipe.length ? (
    <View style={styles.container}>
      <ScrollView>
        <View>
          <TextInput
            placeholder="Search"
            theme={{
              colors: {
                primary: 'red',
              },
            }}
            style={{paddingHorizontal: '8%', marginTop: '5%'}}
            mode="outlined"
            left={
              <TextInput.Icon
                name={() => <Icon name="search" color="black" size={16} />}
              />
            }
          />
          <Title text="Recipes"/>
          {allRecipe.map((item, index) => (
            <RecipeSection
              key={item.id}
              id={item.id}
              title={item.title}
              imgUrl={item.image}
              navigation={navigation}
              index={index}
            />
          ))}
        </View>
      </ScrollView>
    </View>
  ) : (
    <View
      style={{
        alignItems: 'center',
        justifyContent: 'center',
      }}>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
  },
});
