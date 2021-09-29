import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import MovieDetailScreen from '../screens/MovieDetailScreen';
import HomeScreen from '../screens/HomeScreen';
import { Movie } from '../interfaces/movieInterface';

export type RootStackParams = {
  HomeScreen: undefined
  MovieDetailScreen: Movie
}

const Stack = createStackNavigator();

const MoviesStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name='HomeScreen' component={ HomeScreen } />
      <Stack.Screen name='MovieDetailScreen' component={ MovieDetailScreen } />
    </Stack.Navigator>
  )
}

export default MoviesStack
