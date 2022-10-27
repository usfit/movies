import React from 'react';

import CardList from '../CardList';

import './Movies.css';

function MoviesView({ movieData, imageURL, loading, сlickPagination, totalResults, page }) {
  return (
    <CardList
      movieData={movieData}
      imageURL={imageURL}
      loading={loading}
      сlickPagination={(e) => сlickPagination(e)}
      totalResults={totalResults}
      page={page}
    />
  );
}

export default MoviesView;
