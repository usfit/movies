import React from 'react';

import CardList from '../CardList';

import './Movies.css';

function MoviesView({ movieData, imageURL, loading }) {
  return <CardList movieData={movieData} imageURL={imageURL} loading={loading} />;
}

export default MoviesView;
