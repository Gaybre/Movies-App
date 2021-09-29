import React from 'react';
import { ActivityIndicator, StyleSheet, useWindowDimensions, View, FlatList, Text } from 'react-native';
import { useMovies } from '../hooks/useMovies';
import MovieCard from '../components/MovieCard';
import Carousel from 'react-native-snap-carousel';

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
    <View>

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

      <View>
        <Text>Populares</Text>
        <FlatList
          data={ movies }
          renderItem={ ({ item }) => <MovieCard movie={ item } width={150} height={200} /> }
          horizontal
        />
      </View>

    </View>
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
