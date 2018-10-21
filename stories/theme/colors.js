import React, { Fragment } from 'react';
import {
    Card, Col, Row, Avatar, Divider, Table
} from 'antd';
import { storiesOf } from '@storybook/react';
import Color, { colors as c } from 'components/color';
import Text from 'components/font';

const { Meta } = Card;

const colorCard = type => (
    <Card
        bodyStyle={{ textAlign: 'center' }}
        style={{ marginBottom: '16px' }}>
        <Color type={type} background>
            <Avatar size={64}>
                {type[0]}
            </Avatar>
        </Color>
        <Divider />
        <Meta
            title={(
                <Text type="Head-13-OS-Semibold-Black">
                    {type}
                </Text>
            )}
            description={(
                <Text type="Subhead-Text-Field-13-OS-Light-Black-Disabled">
                    {c[type]}
                </Text>
            )} />
    </Card>
);

const defaultColors = Color.types.filter(type => (!type.includes('BTN')));
const btnColors = Color.types.filter(type => (type.includes('BTN')));

const colorGrid = colors => colors.map(type => (
    <Col xs={12} sm={6} md={4} lg={3} xxl={2} key={type}>
        {colorCard(type)}
    </Col>
));

const colors = () => (
    <Fragment>
        <Row gutter={16} style={{ margin: '0' }}>
            {colorGrid(defaultColors)}
        </Row>
        <Divider />
        <Row gutter={16} style={{ margin: '0' }}>
            {colorGrid(btnColors)}
        </Row>
    </Fragment>
);

storiesOf('1. Theme', module)
    .add('Colors', colors);
