import React from 'react';
import { useNavigation } from '@react-navigation/core';
import { ActivityIndicator, Pressable, StyleSheet, Text, View } from 'react-native';
import { useMovies } from '../hooks/useMovies';

const HomeScreen = () => {

  const { movies, isLoading } = useMovies();

  const navigator = useNavigation();
   
  return (
    <View>
      <Text>Home Screen</Text>

      <Pressable
        style={styles.botonNext}
        onPress={() => navigator.navigate('MovieDetailScreen') }
      >
        <Text>ver detalles</Text>
      </Pressable>
      
      {isLoading
        ? <ActivityIndicator color='green' />
        : <Text>{movies[10].title}</Text>
      }
    </View>
  )
}

export default HomeScreen;

const styles = StyleSheet.create({
  botonNext: {
    backgroundColor: "#abd02a",
    margin: 20,
    borderRadius: 10,
    padding: 10,
  }
});
