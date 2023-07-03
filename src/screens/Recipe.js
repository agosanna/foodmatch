import React from 'react';
import { ScrollView, View, Text, StyleSheet, Image } from 'react-native';
import Style from '../utilities/Style';

export default function Recipe({ route }) {
  try {
    const { instructions } = route.params;

    console.log(instructions.image)

    const removeTags = (html) => {
      // Regular expression to remove HTML tags
      const regex = /(<([^>]+)>)/gi;
      return html.replace(regex, '');
    };

    return (
      <ScrollView style={{ flex: 1 }}>
        {instructions ? (
          <View style={{ paddingHorizontal: 32, paddingTop: 104}}>
            <Text style={Style.heading2}>{instructions.title}</Text>
            <Text style={Style.heading3}>{instructions.readyInMinutes + 'min'}</Text>
            

            <View style={{marginBottom: 32}}>
            <Image source={{ uri: instructions.image }} style={{ width: 350, height: 300, alignSelf: 'center', borderRadius: 24, marginBottom: 32 }} />
              <Text style={styles.headingSection}>Ingredients:</Text>

              {instructions.extendedIngredients.map((ingredient, index) => (
                <Text key={index} style={styles.ingredientsList} >{ingredient.original}</Text>
              ))}
              <Text style={styles.headingSection}>Instructions:</Text>
              <Text style={styles.instructionsList}>{removeTags(instructions.instructions)}</Text>
            </View>
          </View>
        ) : (
          <Text>Loading...</Text>
        )}
      </ScrollView>
    );
  } catch (error) {
    console.error(error);
    return <Text>Error occurred: {error.message}</Text>;
  }
}

const styles = StyleSheet.create({
  ingredientsList: {
    fontFamily: 'CabinetGrotesk-Medium',
    fontSize: 20,
    lineHeight: 36,
    textAlign: 'left',
  },
  instructionsList: {
    fontFamily: 'CabinetGrotesk-Medium',
    fontSize: 20,
    lineHeight: 28,
  },
  headingSection: {
    fontFamily: 'Moret-Regular',
    fontSize: 32,
    marginTop: 16,
    marginBottom: 16,
    textAlign: 'left',
  }
})
