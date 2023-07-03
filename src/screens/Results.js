import React from 'react';
import axios from 'axios';
import { View, ScrollView, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import Style from '../utilities/Style';

export default function Results({ navigation, route }) {
  const { recipes, totalResults } = route.params;

  const getInstructions = async (recipe) => {
    try {
      const response = await axios.get(`https://api.spoonacular.com/recipes/${recipe.id}/information`, {
        params: {
          apiKey: '0b8e03f013e44522875d3c2499e557b2',
        },
      });

      // Handle the response data
      console.log(response.data.title);
      navigation.navigate('Recipe', { instructions: response.data });
    } catch (error) {
      // Handle the error
      console.error(error);
    }
  };

  return (
    <ScrollView style={{ flex: 1, backgroundColor: 'rgba(233, 128, 72, 1)', paddingTop: 104 }}>
      <Text style={Style.heading}>Choose your meal</Text>
      <View style={{marginBottom: 100}}>
      {totalResults > 0 ? (
        recipes.map((recipe) => (
          <View key={recipe.id} style={{backgroundColor: 'white', borderRadius: 18, padding: 32, marginBottom: 16, marginHorizontal: 16}}>
            <Image source={{ uri: recipe.image }} style={{ width: 316, height: 250, alignSelf: 'center', borderRadius: 14 }} />
            <Text style={Style.heading2}>{recipe.title}</Text>
            <TouchableOpacity onPress={() => getInstructions(recipe)} style={styles.button}>
              <Text style={styles.buttonText}>View Recipe</Text>
            </TouchableOpacity>
          </View>
          
        ))
      ) : (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text style={{fontFamily: 'CabinetGrotesk-Medium', fontSize: 32, textAlign: 'center', marginBottom: 12}}>NO RECIPE FOUND :c</Text>
          <Text style={{fontFamily: 'CabinetGrotesk-Medium', fontSize: 16, textAlign: 'center'}}>Try to change the cooking time or the ingredients</Text>
        </View>
      )}
      </View>
    </ScrollView>
  );
}

export const styles = StyleSheet.create({
  button: {
    width: 180,
    alignSelf: 'center',
    borderWidth: 2,
    marginTop: 20,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 50, 
  },
  buttonText: {
    fontFamily: 'CabinetGrotesk-Bold',
    fontSize: 20,
    textAlign: 'center'
  },
});
