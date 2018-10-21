import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

import colors from './colors';

class Color extends Component {
    static types = Object.keys(colors);

    get style() {
        const { type, background } = this.props;
        const property = (!background) ? 'color' : 'backgroundColor';
        return {
            [property]: colors[type]
        };
    }

    render() {
        const { style } = this;
        const { type, children } = this.props;

        return React.Children.map(children, (child) => {
            if (typeof child === 'string') {
                return React.createElement('span', { style }, child);
            }
            return React.cloneElement(child, {
                style: {
                    ...child.props.style,
                    ...style
                }
            });
        });
    }
}

Color.propTypes = {
    /** Цвет */
    type: PropTypes.oneOf(Color.types),
    /** Установить цвет как background */
    background: PropTypes.bool,
    /** Нода или массив нод */
    children: PropTypes.oneOfType([
        PropTypes.node,
        PropTypes.arrayOf(PropTypes.node)
    ])
};

Color.defaultProps = {
    type: Color.types[0],
    background: false,
    children: ''
};

export default Color;
