import React from 'react';
import { ActivityIndicator, StyleSheet, useWindowDimensions, View, ScrollView } from 'react-native';
import { useMovies } from '../hooks/useMovies';
import Carousel from 'react-native-snap-carousel';
import MovieCard from '../components/MovieCard';
import MovieList from '../components/MovieList';

const HomeScreen = () => {

  const { movies, isLoading } = useMovies();
  const { width: windowWidth } = useWindowDimensions();

  if(isLoading) {
    return (
      <View
        style={styles.containerCenter}
      >
        <ActivityIndicator color='green' />
      </View>
    )
  }

  return (
    <ScrollView>

      {/* Caorusel main */}
      <View
        style={styles.containerCarousel}
      >
        <Carousel
          data={ movies }
          renderItem={ ({ item }) => <MovieCard movie={ item } /> }
          sliderWidth={ windowWidth }
          itemWidth={300}
          inactiveSlideOpacity={0.4}
        />
      </View>

      {/* Caorusel main */}
      <MovieList movies={ movies } title='En cartelera' />

      {/* Caorusel main */}
      <MovieList movies={ movies } title='En cartelera' />

      {/* Caorusel main */}
      <MovieList movies={ movies } title='En cartelera' />

    </ScrollView>
  )
}

export default HomeScreen;

const styles = StyleSheet.create({
  containerCenter: {
    flex: 1,
    justifyContent: 'center'
  },
  containerCarousel: {
    height: 450
  },
  botonNext: {
    backgroundColor: "#abd02a",
    margin: 20,
    borderRadius: 10,
    padding: 10,
  }
});
