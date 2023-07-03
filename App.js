import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Text } from 'react-native-elements';
import { useFonts } from 'expo-font';

import Home from './src/screens/Home';
import Categories from './src/screens/Categories';
import TimeSlider from './src/screens/TimeSlider';
import AddIngredients from './src/screens/AddIngredients';
import Results from './src/screens/Results';
import Recipe from './src/screens/Recipe';

const Stack = createNativeStackNavigator();

const App = () => {
  const [fontsLoaded] = useFonts({
    'Moret-Semibold': require('./assets/fonts/Moret-Semibold.otf'),
    'Moret-Regular': require('./assets/fonts/Moret-Regular.otf'),
    'CabinetGrotesk-Medium': require('./assets/fonts/CabinetGrotesk-Medium.otf'),
    'CabinetGrotesk-Regular': require('./assets/fonts/CabinetGrotesk-Regular.otf'),
    'CabinetGrotesk-Bold': require('./assets/fonts/CabinetGrotesk-Bold.otf'),
    


  });

  if (!fontsLoaded) {
    // Return null or any other loading UI if fonts are not loaded yet
    return null;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerTransparent: true,
          headerTitle: '',
          headerRight: () => (
            <Text
              style={{ textAlign: 'right', marginRight: 16, fontSize: 24, fontFamily: 'CabinetGrotesk-Bold' }}
            >
              foodmatch
            </Text>
          ),
        }}
      >
        <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
        <Stack.Screen name="Categories" component={Categories} />
        <Stack.Screen name="TimeSlider" component={TimeSlider} />
        <Stack.Screen name="AddIngredients" component={AddIngredients} />
        <Stack.Screen name="Results" component={Results} />
        <Stack.Screen name="Recipe" component={Recipe} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
