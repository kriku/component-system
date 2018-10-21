import React, { Component } from 'react';
import { Button as AntButton } from 'antd';
import PropTypes from 'prop-types';
import { interactiveStyle } from 'components/hoc';

import buttons from './buttons';

const InteractiveButton = interactiveStyle(AntButton);

class Button extends Component {
    static types = Object.keys(buttons);

    get type() {
        const { type } = this.props;
        if (type.includes('CANCEL')) return 'default';
        if (type.includes('RED')) return 'danger';
        if (type.includes('BLUE')) return 'primary';
        return null;
    }

    render() {
        const { props, antType } = this;
        const { type, children, style } = props;
        return <InteractiveButton {...props} type={this.type} styles={buttons[type]} />;
    }
}

Button.propTypes = {
    /** Тип кнопки */
    type: PropTypes.oneOf(Button.types),
    /** Дети */
    children: PropTypes.oneOfType([
        PropTypes.node,
        PropTypes.arrayOf(PropTypes.node)
    ])
};

Button.defaultProps = {
    type: Button.types[0],
    children: ''
};

export default Button;
