import { useEffect, useState } from 'react';
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

    Promise.all([
      _nowPlaying,
      _popular,
      _topRated,
      _upcoming
    ])
    .then((data) => {
      setMovies({
        nowPlaying: data[0].data.results,
        popular: data[1].data.results,
        topRated: data[2].data.results,
        upcoming: data[3].data.results
      });
    });

    setIsLoading(false);
  } 

  useEffect(() => {
    getMovies();
  }, []);
  
  return {
    ...movies,
    isLoading
  }
}
