import React from 'react';
import { Card, Image, Layout, Typography, Tag } from 'antd';

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
          <Content className="CardItem__Content">
            <Title>{`${title} ${ind}`}</Title>
            <p>{date}</p>
            <div>
              <Tag color="default">Action</Tag>
              <Tag color="default">Drama</Tag>
            </div>
            <p>{description}</p>
          </Content>
        </Layout>
      </Layout>
    </Card>
  );
}

export default CardItem;
