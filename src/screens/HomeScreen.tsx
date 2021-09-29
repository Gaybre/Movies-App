import React from 'react';
import { ActivityIndicator, StyleSheet, useWindowDimensions, View, ScrollView } from 'react-native';
import { useMovies } from '../hooks/useMovies';
import Carousel from 'react-native-snap-carousel';
import MovieCard from '../components/MovieCard';
import MovieList from '../components/MovieList';

const HomeScreen = () => {

  const { width: windowWidth } = useWindowDimensions();
  const { nowPlaying, popular, topRated, upcoming, isLoading } = useMovies();

  if(isLoading) {
    return (
      <View style={styles.containerCenter} >
        <ActivityIndicator color='green' />
      </View>
    )
  }

  return (
    <ScrollView>

      {/* Caorusel main */}
      <View style={styles.containerCarousel} >
        <Carousel
          data={ nowPlaying }
          renderItem={ ({ item }) => <MovieCard movie={ item } /> }
          sliderWidth={ windowWidth }
          itemWidth={300}
          inactiveSlideOpacity={0.4}
        />
      </View>

      {/* Populares */}
      <MovieList movies={ popular } title='Populares' />
      {/* Mejor Calificadas */}
      <MovieList movies={ topRated } title='Mejor Calificadas' />
      {/* Proximos lanzamientos */}
      <MovieList movies={ upcoming } title='Proximos lanzamientos' />

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
