import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';

import MovieServise from '../../servises/MovieServise';

import Spinner from './Spinner';
import ErrorMessage from './ErrorMessage';
import MoviesView from './MoviesView';

class Movies extends Component {
  movieRequest = new MovieServise();

  state = {
    movieData: null,
    imageURL: 'https://image.tmdb.org/t/p/original',
    loading: true,
    error: false,
  };

  constructor() {
    super();
    this.updateSearchMovies();
  }

  onLoadMovies = (movies) => {
    this.setState(() => {
      return {
        movieData: movies,
        loading: false,
      };
    });
  };

  onError = () => {
    this.setState(() => {
      return {
        loading: false,
        error: true,
      };
    });
  };

  updateSearchMovies = () => {
    this.movieRequest.getSearchMovies('return').then(this.onLoadMovies).catch(this.onError);
  };

  // eslint-disable-next-line consistent-return
  render() {
    const { movieData, imageURL, loading, error } = this.state;

    const hasData = !(error || loading);
    const errorMessage = [error ? <ErrorMessage key={uuidv4()} /> : null];
    const spin = [loading ? <Spinner key={uuidv4()} /> : null];
    const content = [
      hasData ? <MoviesView movieData={movieData} imageURL={imageURL} loading={loading} key={uuidv4()} /> : null,
    ];

    return (
      <div className="Movies">
        {errorMessage}
        {spin}
        {content}
      </div>
    );
  }
}

export default Movies;
