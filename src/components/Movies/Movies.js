import React, { Component } from 'react';

// import MovieServise from '../../servises/MovieServise';
import CardList from '../CardList';

class Movies extends Component {
  // movieRequest = new MovieServise();

  state = {
    title: 'КРОВАВАЯ РЕЗЬНЯ',
    date: '05.05.1995',
    description: 'Разрови ебальник',
    image: 'https://image.tmdb.org/t/p/original/zldQJ1EhIc7G79cYyXrzQQzUl7a.jpg',
  };

  render() {
    const { title, date, description, image } = this.state;
    return <CardList title={title} date={date} description={description} image={image} />;
  }
}

export default Movies;
