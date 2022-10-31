import React from 'react';
import { Card, Image, Layout, Typography, Rate } from 'antd';
import { format } from 'date-fns';

import './CardItem.css';
import { Consumer } from '../ServiceContext/ServiceContext';

import GenreList from './GenreList';

const { Sider, Content } = Layout;
const { Title } = Typography;

function shotText(description) {
  if (description.length > 150) {
    description = description.slice(0, 150);
    const lastSymbol = description.lastIndexOf(' ');
    const newDesc = `${description.substr(0, lastSymbol)} ...`;
    return newDesc;
  }
  return description;
}

function formatData(data) {
  try {
    return format(new Date(data), 'PP');
  } catch (err) {
    return 'No data';
  }
}

function CardItem({ title, date, description, image, genre, average, setRating, idx }) {
  const movie = localStorage.getItem(idx) ? localStorage.getItem(idx) : null;
  const rating = movie ? JSON.parse(movie).rated : 0;
  let colorRate;
  if (average > 7) {
    colorRate = 'colorRare-four';
  } else if (average > 5) {
    colorRate = 'colorRate-three';
  } else if (average > 3) {
    colorRate = 'colorRate--two';
  } else {
    colorRate = 'colorRate--one';
  }
  shotText(description);
  return (
    <Card className="CardItem">
      <div className={`iconRating ${colorRate}`}>{average}</div>
      <Layout>
        <Sider className="CardItem__image" width={183}>
          <Image src={image} />
        </Sider>
        <Layout className="CardItem__content">
          <div className="CardItem__header">
            <Title>{`${title}`}</Title>
            <p className="CardItem__data">{formatData(date)}</p>
            <Consumer>
              {(genreList) => {
                return <GenreList genre={genre} genreList={genreList} />;
              }}
            </Consumer>
          </div>
          <Content className="CardItem__description">
            <p>{shotText(description)}</p>
          </Content>
          <Rate
            allowHalf
            count={10}
            style={{}}
            className="stars"
            onChange={(e) => setRating(e, idx)}
            defaultValue={rating}
          />
        </Layout>
      </Layout>
    </Card>
  );
}

export default CardItem;
