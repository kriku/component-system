import { storiesOf } from '@storybook/react';
import React from 'react';
import { Avatar, Table } from 'antd';
import Font from 'components/font';
import Color from 'components/color';
// for displaying styles
import textStyles from 'components/font/fonts';

const columns = [
    {
        title: 'Type',
        dataIndex: 'type',
        key: 'type'
    },
    {
        title: 'Sample',
        dataIndex: 'type',
        key: 'sample',
        render: type => (
            <Font type={type}>
                Sample text
            </Font>
        )
    },
    {
        title: 'Font Family',
        dataIndex: 'fontFamily',
        key: 'fontFamily',
        render: type => (
            <Font type={type}>
                {type}
            </Font>
        )
    },
    {
        title: 'Font Size',
        dataIndex: 'fontSize',
        key: 'fontSize'
    },
    {
        title: 'Color',
        dataIndex: 'color',
        key: 'color',
        render: color => (
            <Avatar size={16} style={{ backgroundColor: color }} />
        )
    }
];

const data = Font.types.map(type => ({
    key: type,
    type,
    ...textStyles[type]
}));

storiesOf('1. Theme', module)
    .add('Fonts', () => (
        <Table dataSource={data} columns={columns} pagination={false} />
    ));
