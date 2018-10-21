import { storiesOf } from '@storybook/react';
import React from 'react';
import {
    Card, Col, Row, Avatar, Divider, Icon as AntIcon
} from 'antd';
import Text from 'components/font';
import Icon from 'components/icon';
import Color from 'components/color';

const { Meta } = Card;

const iconCard = type => (
    <Color type="BACKGROUND" background>
        <Card
            bodyStyle={{ textAlign: 'center' }}
            style={{ height: '140px', marginBottom: '16px' }}>
            <Icon type={type} />
            <Divider />
            <Meta title={(
                <Text type="Numbers-11-Gray">
                    {type}
                </Text>
            )} />
        </Card>
    </Color>
);

const iconGrid = Icon.types.map(type => (
    <Col xs={12} sm={6} md={4} lg={3} xxl={2} key={type}>
        {iconCard(type)}
    </Col>
));

storiesOf('1. Theme')
    .add('Icons', () => (
        <Row gutter={16} style={{ margin: '0' }}>
            {iconGrid}
        </Row>
    ));
