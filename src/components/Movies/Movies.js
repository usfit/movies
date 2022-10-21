import React, { Component } from 'react';

// import MovieServise from '../../servises/MovieServise';
import CardList from '../CardList';

class Movies extends Component {
  // movieRequest = new MovieServise();

  state = {
    title: 'The way back',
    date: '05.05.1995',
    description:
      'A former basketball all-star, who has lost his wife and family foundation in a struggle with addiction attempts to regain his soul  and salvation by becoming the coach of a disparate ethnically mixed high ...',
    image: 'https://image.tmdb.org/t/p/original/zldQJ1EhIc7G79cYyXrzQQzUl7a.jpg',
  };

  render() {
    const { title, date, description, image } = this.state;
    return <CardList title={title} date={date} description={description} image={image} />;
  }
}

export default Movies;
