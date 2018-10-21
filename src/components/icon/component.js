import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

import * as icons from './icons';

class Icon extends Component {
    static types = Object.keys(icons);

    render() {
        const { type } = this.props;
        return <img alt={type} src={icons[type]} />;
    }
}

Icon.propTypes = {
    /** Имя svg файла */
    type: PropTypes.oneOf(Icon.types)
};

Icon.defaultProps = {
    type: Icon.types[0]
};

export default Icon;
