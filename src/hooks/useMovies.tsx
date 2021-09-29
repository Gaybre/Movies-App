import { useEffect, useState } from 'react';
import { Alert } from 'react-native';
import movieDB from '../api/movieDB';
import { Movie, MovieDBResponse } from '../interfaces/movieInterface';

interface MoviesLists {
  nowPlaying: Movie[]
  popular: Movie[]
  topRated: Movie[]
  upcoming: Movie[]
}

export const useMovies = () => {

  const [isLoading, setIsLoading] = useState(true);
  const [movies, setMovies] = useState<MoviesLists>({
    nowPlaying: [],
    popular: [],
    topRated: [],
    upcoming: []
  });
  
  const getMovies = async () => {
    const _nowPlaying = movieDB.get<MovieDBResponse>('/now_playing');
    const _popular = movieDB.get<MovieDBResponse>('/popular');
    const _topRated = movieDB.get<MovieDBResponse>('/top_rated');
    const _upcoming = movieDB.get<MovieDBResponse>('/upcoming');

    try {
      const data = await Promise.all([
        _nowPlaying,
        _popular,
        _topRated,
        _upcoming
      ]);
  
      setMovies({
        nowPlaying: data[0].data.results,
        popular: data[1].data.results,
        topRated: data[2].data.results,
        upcoming: data[3].data.results
      });
      setIsLoading(false);
      
    } catch (err) {
      Alert.alert('Error al obtener peliculas', `${err}`, [
        {
          text: 'Reintentar',
          style: 'default',
          onPress: () => getMovies()
        },
        {
          text: 'Cancelar',
          style: 'destructive',
          onPress: () => {}
        }
      ]);
    }
  }
    
  useEffect(() => {
    getMovies();
  }, []);
  
  return {
    ...movies,
    isLoading
  }
}
