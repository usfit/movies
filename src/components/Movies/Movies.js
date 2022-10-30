import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Tabs } from 'antd';

import MovieServise from '../../servises/MovieServise';
import SearchPanel from '../SearchPanel';
import { Provider } from '../ServiceContext';

import Spinner from './Spinner';
import ErrorMessage from './ErrorMessage';
import MoviesView from './MoviesView';

import './Movies.css';

class Movies extends Component {
  MovieServise = new MovieServise();

  state = {
    movieData: null,
    imageURL: 'https://image.tmdb.org/t/p/original',
    loading: false,
    error: false,
    errorNetwork: false,
    query: null,
    page: 1,
    totalResults: 1,
    genreList: [],
  };

  componentDidMount() {
    this.updateSearchMovies();
    this.loadGenreList();
  }

  componentDidUpdate(prevProps, prevState) {
    const { query, page } = this.state;
    if (query !== prevState.query || page !== prevState.page) {
      this.updateSearchMovies();
    }
  }

  onLoadMovies = (result) => {
    const movies = result.results;
    const totalResults = result.total_results;
    if (movies.length !== 0) {
      this.setState(() => {
        return {
          movieData: movies,
          totalResults,
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
    const { query, page } = this.state;
    if (!query) {
      return;
    }
    this.setState(() => {
      return {
        loading: true,
      };
    });
    this.MovieServise.getSearchMovies(query, page).then(this.onLoadMovies).catch(this.onError);
  };

  getGenreList = (result) => {
    const genreList = Array.from(result.genres);
    this.setState(() => {
      return {
        genreList,
      };
    });
  };

  loadGenreList = () => {
    this.MovieServise.loadGenreList().then(this.getGenreList).catch(this.onError);
  };

  queryValue = (e) => {
    const newQuery = e.target.value;
    this.setState(() => {
      return {
        query: newQuery,
      };
    });
  };

  сlickPagination = (e) => {
    this.setState(() => {
      return {
        page: e,
      };
    });
  };

  render() {
    const { movieData, imageURL, loading, error, errorNetwork, totalResults, page, genreList } = this.state;
    const hasData = !error && !loading;
    const errorMessage = [error ? <ErrorMessage key={uuidv4()} errorNetwork={errorNetwork} /> : null];
    const spin = [loading ? <Spinner key={uuidv4()} /> : null];
    const noneContent = [hasData && !movieData ? <h1 key={uuidv4()}>По вашему запросу ничего не найдено</h1> : null];
    const content = [
      hasData && movieData ? (
        <MoviesView
          imageURL={imageURL}
          loading={loading}
          movieData={movieData}
          key={uuidv4()}
          totalResults={totalResults}
          сlickPagination={(e) => this.сlickPagination(e)}
          page={page}
        />
      ) : null,
    ];

    const tabsItems = [
      {
        label: 'Search',
        key: 'item-1',
        children: (
          <>
            <SearchPanel queryValue={(e) => this.queryValue(e)} />
            {errorMessage}
            {spin}
            {noneContent}
            {content}
          </>
        ),
      },
      { label: 'Rated', key: 'item-2', children: <h1>Заглушка</h1> },
    ];

    return (
      <Provider value={genreList}>
        <Tabs centered defaultActiveKey="1" items={tabsItems} className="Movies" />
      </Provider>
    );
  }
}

export default Movies;
