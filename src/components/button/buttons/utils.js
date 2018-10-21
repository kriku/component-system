import { colors } from 'components/color';

export default (baseStyle, color) => ({
    normal: {
        ...baseStyle,
        backgroundColor: colors[color],
        borderColor: colors[color]
    },
    hovered: {
        backgroundColor: colors[`${color} / HOVER`],
        borderColor: colors[`${color} / HOVER`]
    },
    focused: {
        backgroundColor: colors[`${color} / HOVER`],
        borderColor: colors[`${color} / HOVER`]
    },
    pressed: {
        backgroundColor: colors[`${color} / PRESSED`],
        borderColor: colors[`${color} / PRESSED`]
    },
    disabled: {
        backgroundColor: colors[`${color} / DISABLED`],
        borderColor: colors[`${color} / DISABLED`]
    }
});
