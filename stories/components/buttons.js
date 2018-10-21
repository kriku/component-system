import { storiesOf } from '@storybook/react';
import React, { Fragment } from 'react';
import {
    Col, Row, Avatar, Divider, Table
} from 'antd';
import Button from 'components/button';
import Color from 'components/color';
import buttons from 'components/button/buttons';

const columns = [
    {
        title: 'Type',
        dataIndex: 'type',
        key: 'type'
    },
    {
        align: 'center',
        title: 'Sample',
        dataIndex: 'type',
        key: 'sample',
        render: type => (
            <Button type={type}>
                {type.split('/')[1]}
            </Button>
        )
    },
    {
        align: 'center',
        title: 'Different states',
        dataIndex: 'type',
        key: 'sample-states',
        render: type => (text => (
            ['hovered', 'pressed', 'disabled'].map(state => (
                <Fragment>
                    <Button type={type} {...{ [state]: true }}>
                        {text}
                    </Button>
                    <br />
                </Fragment>
            ))
        ))(type.split('/')[1])
    }
];

const data = Button.types.map(type => ({
    key: type,
    type,
    info: buttons[type]
}));

storiesOf('2. Components', module)
    .add('Buttons', () => (
        <Table dataSource={data} columns={columns} pagination={false} />
    ));
