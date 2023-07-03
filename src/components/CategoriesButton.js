import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

export default function CategoriesButton({ category, onPress }) {
  return (
    <TouchableOpacity style={styles.ghostButton} onPress={onPress}>
      <Text style={styles.ghostButtonText}>{category}</Text>
    </TouchableOpacity>
  );
}

export const styles = StyleSheet.create({
  ghostButton: {
    borderWidth: 2,
    paddingHorizontal: 20,
    paddingVertical: '3%',
    borderRadius: 50,
  },
  ghostButtonText: {
    fontFamily: 'CabinetGrotesk-Bold',
    fontSize: 20,
  },
});