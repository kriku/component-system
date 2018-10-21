import React, { Component } from 'react';
import PropTypes from 'prop-types';

export function interactiveStyle(Decorated) {
    class Interactive extends Component {
        constructor(props) {
            super(props);
            const {
                focused, hovered, pressed, disabled
            } = props;
            this.state = {
                focused, hovered, pressed, disabled
            };
        }

        onMouseOver = () => { this.setState({ hovered: true }); }

        onMouseOut = () => { this.setState({ hovered: false }); }

        onMouseDown = () => { this.setState({ pressed: true }); }

        onMouseUp = () => { this.setState({ pressed: false }); }

        onFocus = () => { this.setState({ focused: true }); }

        onBlur = () => { this.setState({ focused: false }); }

        render() {
            const {
                onMouseOver, onMouseOut, onMouseDown, onMouseUp, onFocus, onBlur
            } = this;
            const {
                focused, hovered, pressed, disabled
            } = this.state;
            const { style = {}, styles } = this.props;
            const styled = Object.assign(style,
                styles.normal,
                focused && styles.focused,
                hovered && styles.hovered,
                pressed && styles.pressed,
                disabled && styles.disabled);
            return (
                <Decorated
                    onMouseOver={onMouseOver}
                    onMouseOut={onMouseOut}
                    onMouseDown={onMouseDown}
                    onMouseUp={onMouseUp}
                    onFocus={onFocus}
                    onBlur={onBlur}
                    {...this.props}
                    style={styled} />
            );
        }
    }
    Interactive.propTypes = {
        styles: PropTypes.shape({
            normal: PropTypes.object,
            focused: PropTypes.object,
            hovered: PropTypes.object,
            pressed: PropTypes.object,
            disabled: PropTypes.object
        }).isRequired
    };
    return Interactive;
}
