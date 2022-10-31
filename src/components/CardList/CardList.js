import React from 'react';
import { Row, Col, Spin, Pagination } from 'antd';
import { v4 as uuidv4 } from 'uuid';

import CardItem from '../CardItem';

import notFound from './notFound.png';

import './CardList.css';

const setRating = (e, item) => {
  item.rated = e;
  const movie = JSON.stringify(item);
  localStorage.setItem(item.id, movie);
};

function CardList({ movieData, imageURL, loading, сlickPagination, totalResults, page }) {
  let components = null;
  if (loading) {
    components = (
      <Col>
        <Spin size="large" />
      </Col>
    );
  } else {
    components = movieData.map((item) => {
      const image = [item.backdrop_path ? `${imageURL}${item.backdrop_path}` : notFound];
      return (
        <Col key={uuidv4()}>
          <CardItem
            key={uuidv4()}
            title={item.title}
            date={item.release_date}
            description={item.overview}
            image={image}
            genre={item.genre_ids}
            average={item.vote_average}
            idx={item.id}
            setRating={(e) => setRating(e, item)}
          />
        </Col>
      );
    });
  }

  return (
    <>
      <Row className="CardList" gutter={[36, 35]} justify="center">
        {components}
      </Row>
      <Row className="CardList__Pagination" justify="center">
        <Pagination
          defaultCurrent={1}
          total={totalResults}
          onChange={сlickPagination}
          showSizeChanger={false}
          pageSize={20}
          current={page}
        />
      </Row>
    </>
  );
}

export default CardList;
