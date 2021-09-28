import { useEffect, useState } from 'react';
import movieDB from '../api/movieDB';
import { Movie, MovieDbNowPlaying } from '../interfaces/movieInterface';

export const useMovies = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  
  const getMovies = async () => {
    const res = await movieDB.get<MovieDbNowPlaying>('/now_playing');
    setMovies(res.data.results);
    setIsLoading(false);
  } 

  useEffect(() => {
    getMovies();
  }, []);
  
  return {
    movies,
    isLoading
  }
}
