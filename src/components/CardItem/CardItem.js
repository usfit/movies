import React from 'react';
import { Card, Image, Layout, Typography } from 'antd';

import './CardItem.css';

const { Sider, Content } = Layout;
const { Title } = Typography;

function CardItem({ ind, title, date, description, image }) {
  return (
    <Card className="CardItem">
      <Layout>
        <Sider className="CardItem__Image" width={183}>
          <Image src={image} />
        </Sider>
        <Layout>
          <Content>
            <Title>{`${title} ${ind}`}</Title>
            <p>{date}</p>
            <p>{description}</p>
          </Content>
        </Layout>
      </Layout>
    </Card>
  );
}

export default CardItem;
