import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MoviesStack from './MoviesStack';

export const Navigation = () => {
  return (
    <NavigationContainer>
      <MoviesStack />
    </NavigationContainer>
  )
}
