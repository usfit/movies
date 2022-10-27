import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';

import MovieServise from '../../servises/MovieServise';
import SearchPanel from '../SearchPanel';

import Spinner from './Spinner';
import ErrorMessage from './ErrorMessage';
import MoviesView from './MoviesView';

class Movies extends Component {
  MovieServise = new MovieServise();

  state = {
    movieData: null,
    imageURL: 'https://image.tmdb.org/t/p/original',
    loading: false,
    error: false,
    errorNetwork: false,
    query: null,
  };

  componentDidMount() {
    this.updateSearchMovies();
  }

  componentDidUpdate(prevProps, prevState) {
    const { query } = this.state;
    if (query !== prevState.query) {
      this.updateSearchMovies();
    }
  }

  onLoadMovies = (movies) => {
    if (movies.length !== 0) {
      this.setState(() => {
        return {
          movieData: movies,
          loading: false,
        };
      });
    } else {
      this.setState(() => {
        return {
          movieData: null,
          loading: false,
        };
      });
    }
  };

  onError = (e) => {
    if (e.message === 'Failed to fetch') {
      this.setState(() => {
        return {
          errorNetwork: true,
        };
      });
    }
    this.setState(() => {
      return {
        loading: false,
        error: true,
      };
    });
  };

  updateSearchMovies = () => {
    const { query } = this.state;
    if (!query) {
      return;
    }
    this.setState(() => {
      return {
        loading: true,
      };
    });
    this.MovieServise.getSearchMovies(query).then(this.onLoadMovies).catch(this.onError);
  };

  queryValue = (e) => {
    const newQuery = e.target.value;
    this.setState(() => {
      return {
        query: newQuery,
      };
    });
  };

  // eslint-disable-next-line consistent-return
  render() {
    const { movieData, imageURL, loading, error, errorNetwork } = this.state;

    const hasData = !error && !loading;
    const errorMessage = [error ? <ErrorMessage key={uuidv4()} errorNetwork={errorNetwork} /> : null];
    const spin = [loading ? <Spinner key={uuidv4()} /> : null];
    const noneContent = [hasData && !movieData ? <h1 key={uuidv4()}>По вашему запросу ничего не найдено</h1> : null];
    const content = [
      hasData && movieData ? (
        <MoviesView imageURL={imageURL} loading={loading} movieData={movieData} key={uuidv4()} />
      ) : null,
    ];

    return (
      <>
        <SearchPanel queryValue={(e) => this.queryValue(e)} />
        <div className="Movies">
          {errorMessage}
          {spin}
          {noneContent}
          {content}
        </div>
      </>
    );
  }
}

export default Movies;
