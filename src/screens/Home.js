import * as React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Style from '../utilities/Style'

export default function Home({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'rgba(189, 218, 187, 1)'}}>
        <Text style={Style.heading}>I know, you're hungry, let me help you</Text>
        <TouchableOpacity style={styles.ghostButton} onPress={() => navigation.navigate('Categories')}>
            <Text style={styles.ghostButtonText}>Find Your Meal</Text>
        </TouchableOpacity>
      </View>
    );
  }

  export const styles = StyleSheet.create({
    ghostButton: {
      borderWidth: 2,
      paddingHorizontal: 20,
      paddingVertical: 10,
      borderRadius: 50,  
    },
    ghostButtonText: {
      fontFamily: 'CabinetGrotesk-Bold',
      fontSize: 24,
    },
  });