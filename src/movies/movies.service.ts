import { Injectable, NotFoundException } from '@nestjs/common';
import { Movie } from './entities/movie.entity';

@Injectable()
export class MoviesService {
  private movies: Movie[] = [];

  getAll(): Movie[] {
    return this.movies;
  }

  getOne(id: string): Movie {
    const movie = this.movies.find((movie) => movie.id === parseInt(id));
    if (!movie) {
      throw new NotFoundException('Movie with ID not found');
    }
    return movie;
  }

  createMovie(movieData) {
    this.movies.push({
      id: this.movies.length + 1,
      ...movieData,
    });
  }

  deleteMovie(id: string) {
    this.getOne(id);
    this.movies = this.movies.filter((movie) => movie.id !== +id);
  }

  patchMovie(id: string, movieData) {
    const movie = this.getOne(id);
    this.deleteMovie(id);
    this.movies.push({
      ...movie,
      ...movieData,
    });
  }
}
