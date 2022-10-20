import React from 'react';
import { Card, Image } from 'antd';

import './CardItem.css';

function CardItem({ ind, title, date, description, image }) {
  return (
    <Card className="CardItem">
      <Image src={image} width={183} />
      <div>{`${title} ${ind}`}</div>
      <div>{date}</div>
      <div>{description}</div>
    </Card>
  );
}

export default CardItem;
