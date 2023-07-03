import React, { useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import Slider from '@react-native-community/slider';
import Style from '../utilities/Style'

export default function TimeSlider({ navigation, route }) {
  const { type } = route.params;
  const [range, setRange] = useState(20);

  useEffect(() => {
    console.log(type);
  }, [type]);

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'rgba(254, 227, 148, 1)', paddingHorizontal: 40 }}>
      <Text style={Style.heading}>How much time do you have</Text>
      <Slider
        style={{ width: 300, height: 40 }}
        minimumValue={20}
        maximumValue={120}
        minimumTrackTintColor="black"
        maximumTrackTintColor="black"
        thumbTintColor="black"
        step={5}
        value={10}
        onValueChange={(value) => {
          setRange(Math.round(value / 5) * 5);
        }}
      />
      <Text style={Style.heading}>{range + 'min'}</Text>
      <TouchableOpacity onPress={() => navigation.navigate('AddIngredients', { type: type, time: range })}>
        <Image source={require('../../assets/next.png')} style={styles.nextButton}/>
      </TouchableOpacity>
    </View>
  );
}

export const styles = StyleSheet.create({
  nextButton: {
    width: 55,
    height: 55
  }
})
