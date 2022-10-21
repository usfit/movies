import React from 'react';
import { Row, Col } from 'antd';

import './CardList.css';

import CardItem from '../CardItem';

function CardList({ title, date, description, image }) {
  const components = [];
  for (let item = 1; item <= 20; item += 1) {
    components.push(
      <Col key={item + 100}>
        <CardItem key={item} ind={item} title={title} date={date} description={description} image={image} />
      </Col>
    );
  }

  return (
    <div className="CardList">
      <Row gutter={[36, 35]} justify="center">
        {components}
      </Row>
    </div>
  );
}

export default CardList;
