import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Style from '../utilities/Style';
import CategoriesButton from '../components/CategoriesButton';

export default function Categories({ navigation }) {
  const categories = ['Main Course', 'Side Dish', 'Dessert', 'Appetizer', 'Salad', 'Bread', 'Soup', 'Snack', 'Fingerfood'];

  const handleCategoryPress = (type) => {
    navigation.navigate('TimeSlider', { type });
  };

  return (
    <View style={{ flex: 1, alignItems: 'center', backgroundColor: '#FFA79D', paddingTop: 104 }}>
      <Text style={Style.heading}>Choose your category</Text>
      <View style={{ width: '80%', flex: 1, justifyContent: 'space-evenly', alignItems: 'flex-start', marginBottom: 40 }}>
        {categories.map((category) => (
          <CategoriesButton key={category} category={category} onPress={() => handleCategoryPress(category)} />
        ))}
      </View>
    </View>
  );
}