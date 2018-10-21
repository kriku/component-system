import React, { Component } from 'react';
import PropTypes from 'prop-types';

import fonts from './fonts';

class Font extends Component {
    static types = Object.keys(fonts);

    render() {
        const { type, children } = this.props;

        return React.Children.map(children, (child) => {
            if (typeof child === 'string') {
                return React.createElement('span', {
                    style: fonts[type]
                }, child);
            }
            return React.cloneElement(child, {
                style: {
                    ...fonts[type],
                    ...child.props.style
                }
            });
        });
    }
}

Font.propTypes = {
    /** Тип текста */
    type: PropTypes.oneOf(Font.types),
    /** К детям добавятся стили */
    children: PropTypes.oneOfType([
        PropTypes.node,
        PropTypes.arrayOf(PropTypes.node)
    ])
};

Font.defaultProps = {
    type: Font.types[0],
    children: ''
};

export default Font;
