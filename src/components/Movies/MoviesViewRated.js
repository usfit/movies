import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';

import CardList from '../CardList';

import './Movies.css';

class MoviesViewRated extends Component {
  state = {
    page: 1,
  };

  сlickPagination = (e) => {
    this.setState(() => {
      return {
        page: e,
      };
    });
  };

  render() {
    const { page } = this.state;
    const { imageURL } = this.props;
    const keys = Object.keys(localStorage);
    const items = keys.map((key) => {
      return JSON.parse(localStorage[key]);
    });
    const totalResults = items.length;
    const renderingItems = items.slice(page * 20 - 20, page * 20);
    const content = [
      totalResults > 0 ? (
        <CardList
          movieData={renderingItems}
          imageURL={imageURL}
          key={uuidv4()}
          totalResults={totalResults}
          сlickPagination={this.сlickPagination}
        />
      ) : (
        <h1 key={uuidv4()}>Вы не оценили ни один фильм</h1>
      ),
    ];
    return <div>{content}</div>;
  }
}

export default MoviesViewRated;
