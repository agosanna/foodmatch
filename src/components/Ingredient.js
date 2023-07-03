import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function Ingredient({ name, onDelete }) {
  return (
    <View style={styles.container}>
      <Text style={styles.buttonText}>{name}</Text>
      <TouchableOpacity style={styles.button} onPress={onDelete}>
        <Text style={styles.buttonText}>x</Text>
      </TouchableOpacity>
    </View>
  );
}

export const styles = StyleSheet.create({
  container: {
    width: 300,
    borderBottomWidth: 2,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  button: {
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  buttonText: {
    fontFamily: 'CabinetGrotesk-Bold',
    color: 'black',
    fontSize: 24,
  },
});
