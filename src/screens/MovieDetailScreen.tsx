import React from 'react';
import { StackScreenProps } from '@react-navigation/stack';
import { StyleSheet, Text, View } from 'react-native';
import { RootStackParams } from '../navigation/MoviesStack';

interface Props extends StackScreenProps<RootStackParams, 'MovieDetailScreen'> {}

const MovieDetailScreen = ({ route }: Props) => {

  const movie = route.params

  return (
    <View>
      <Text>{ movie.title }</Text>
    </View>
  )
}

export default MovieDetailScreen;

const styles = StyleSheet.create({});
