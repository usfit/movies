import React from 'react';
import { Row, Col, Spin } from 'antd';
import { v4 as uuidv4 } from 'uuid';

import './CardList.css';

import CardItem from '../CardItem';

function CardList({ movieData, imageURL, loading }) {
  let components = null;
  if (loading) {
    components = (
      <Col>
        <Spin size="large" />
      </Col>
    );
  } else {
    components = movieData.map((item) => {
      return (
        <Col key={uuidv4()}>
          <CardItem
            key={uuidv4()}
            title={item.title}
            date={item.release_date}
            description={item.overview}
            image={`${imageURL}${item.backdrop_path}`}
          />
        </Col>
      );
    });
  }

  return (
    <Row className="CardList" gutter={[36, 35]} justify="center">
      {components}
    </Row>
  );
}

export default CardList;
