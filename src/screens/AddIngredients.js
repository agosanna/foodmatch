import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { View, Text, Image, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import Ingredient from '../components/Ingredient';
import Style from '../utilities/Style';

export default function AddIngredients({ navigation, route }) {
  const { type, time } = route.params;
  console.log(type + ' ' + time )
  const [inputText, setInputText] = useState('');
  const [ingredients, setIngredients] = useState([]);
  const inputRef = useRef(null);

  useEffect(() => {
    console.log('ingredients: ' + ingredients + ', type: ' + type + ', time: ' + time);
  }, [ingredients]);

  const handleAdd = () => {
    if (inputText !== '') {
      setIngredients((prev) => [...prev, inputText.toLowerCase()]);
      setInputText('');
      inputRef.current.clear(); // Clear the input text manually
    }
  };

  const handleDeleteIngredient = (index) => {
    setIngredients((prevIngredients) => {
      const updatedIngredients = [...prevIngredients];
      updatedIngredients.splice(index, 1);
      return updatedIngredients;
    });
  };

  const getResults = async () => {
    try {
      const response = await axios.get('https://api.spoonacular.com/recipes/complexSearch', {
        params: {
          number: 10,
          type: type,
          includeIngredients: ingredients.join(),
          maxReadyTime: time,
          apiKey: '0b8e03f013e44522875d3c2499e557b2',
          sort: 'popularity',
          ignorePantry: true,
        },
      });

      console.log(response.data);
      navigation.navigate('Results', { recipes: response.data.results, totalResults: response.data.totalResults });
    } catch (error) {
      navigation.navigate('Results', { recipes: null });
      console.log(error)
    }
  };

  return (
    <View style={{ flex: 1, alignItems: 'center', backgroundColor: 'rgba(233, 128, 72, 1)', paddingTop: 104, paddingHorizontal: 8 }}>
      <Text style={Style.heading}>Write at least one ingredient you want to use</Text>
      <TextInput
        ref={inputRef}
        style={styles.input}
        placeholder='Write here'
        placeholderTextColor='rgba(0, 0, 0, 0.3)'
        onChangeText={setInputText}
      />
      <TouchableOpacity onPress={handleAdd} disabled={inputText === ''}>
        <Image source={require('../../assets/add.png')} style={{ width: 55, height: 55 }} />
      </TouchableOpacity>
      <View style={{ flex: 1 }}>
        {ingredients.map((element, index) => {
          return (
            <Ingredient
              key={index}
              name={element !== '' && element}
              onDelete={() => handleDeleteIngredient(index)}
            />
          );
        })}
      </View>
      <TouchableOpacity style={styles.button} onPress={getResults}>
        <Text style={styles.buttonText}>Results</Text>
      </TouchableOpacity>
    </View>
  );
}

export const styles = StyleSheet.create({
  input: {
    fontFamily: 'CabinetGrotesk-Medium',
    paddingVertical: 10,
    paddingHorizontal: 10,
    width: 200,
    borderBottomWidth: 0,
    fontSize: 32,
    textAlign: 'center',
  },
  button: {
    borderWidth: 2,
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginBottom: 30,
    borderRadius: 50,
  },
  buttonText: {
    fontSize: 24,
  },
});
