import React from 'react';
import { Card, Image, Layout, Typography, Tag } from 'antd';
import { format } from 'date-fns';

import './CardItem.css';

const { Sider, Content } = Layout;
const { Title } = Typography;

function shotText(description) {
  if (description.length > 207) {
    description = description.slice(0, 207);
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

function CardItem({ title, date, description, image }) {
  shotText(description);
  return (
    <Card className="CardItem">
      <Layout>
        <Sider className="CardItem__image" width={183}>
          <Image src={image} />
        </Sider>
        <Layout className="CardItem__content">
          <div className="CardItem__header">
            <Title>{`${title}`}</Title>
            <p className="CardItem__data">{formatData(date)}</p>
            <div>
              <Tag color="default">Action</Tag>
              <Tag color="default">Drama</Tag>
            </div>
          </div>
          <Content className="CardItem__description">
            <p>{shotText(description)}</p>
          </Content>
        </Layout>
      </Layout>
    </Card>
  );
}

export default CardItem;
