import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { Movie } from '../interfaces/movieInterface';

interface Props {
  movie: Movie
  width?: number
  height?: number
}

const MovieCard = ({ movie, width= 300, height= 420 }: Props) => {

  const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

  return (
    <View
      style={{
        width,
        height,
        marginHorizontal: 5
      }}
    >
      <View
        style={styles.posterContainer}
      >
        <Image
          source={{ uri }}
          style={styles.poster}
        />
      </View>
    </View>
  )
}

export default MovieCard;

const styles = StyleSheet.create({
  posterContainer: {
    flex: 1,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 5,

    elevation: 10,
  },
  poster: {
    flex: 1,
    borderRadius: 20
  }
});
