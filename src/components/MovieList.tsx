import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { Movie } from '../interfaces/movieInterface';
import MovieCard from './MovieCard';

interface Props {
  movies: Movie[]
  title: string
}

const MovieList = ({ movies, title }: Props) => {
  return (
    <View
      style={styles.containerHorizontalList}
    >
      <Text style={styles.title}>
        { title }
      </Text>
      <FlatList
        data={ movies }
        renderItem={ ({ item }) => <MovieCard movie={ item } width={150} height={200} /> }
        horizontal
      />
    </View>
  )
}

export default MovieList;

const styles = StyleSheet.create({
  containerHorizontalList: {
    height: 250
  },
  title: {
    fontSize: 18,
    fontWeight: '400',
    marginBottom: 8,
    marginLeft: 10
  }
});
