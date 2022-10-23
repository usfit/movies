import React, { Component } from 'react';

import MovieServise from '../../servises/MovieServise';
import CardList from '../CardList';

class Movies extends Component {
  movieRequest = new MovieServise();

  state = {
    movieData: null,
    imageURL: 'https://image.tmdb.org/t/p/original',
  };

  constructor() {
    super();
    this.updateSearchMovies();
  }

  updateSearchMovies = () => {
    this.movieRequest.getSearchMovies().then((body) => {
      this.setState(() => {
        return {
          movieData: body,
        };
      });
    });
  };

  // eslint-disable-next-line consistent-return
  render() {
    const { movieData, imageURL } = this.state;
    if (movieData) {
      return <CardList movieData={movieData} imageURL={imageURL} />;
    }
  }
}

export default Movies;
