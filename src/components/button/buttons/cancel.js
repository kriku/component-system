import { colors } from 'components/color';

export default {
    'BTN / CANCEL / BLUE': {
        normal: {
            color: colors['BTN / BLUE / DISABLED'],
            lineHeight: '1',
            padding: '14px 77px',
            boxShadow: 'none',
            height: '45px',
            width: '204px',
            backgroundColor: 'transparent',
            borderColor: 'transparent'
        },
        focused: {
            backgroundColor: colors.WHITE,
            borderColor: colors.BLUE,
            color: colors['BTN / BLUE / HOVER'],
            boxShadow: '0px 0px 25px rgba(40, 47, 60, 0.05), 0px 20px 25px rgba(40, 47, 60, 0.05), 0px 3px 4px rgba(40, 47, 60, 0.05)'
        },
        hovered: {
            backgroundColor: colors.WHITE,
            borderColor: colors.BLUE,
            color: colors['BTN / BLUE / HOVER'],
            boxShadow: '0px 0px 25px rgba(40, 47, 60, 0.05), 0px 20px 25px rgba(40, 47, 60, 0.05), 0px 3px 4px rgba(40, 47, 60, 0.05)'
        },
        pressed: {
            backgroundColor: colors.WHITE,
            borderColor: colors.BLUE,
            color: colors['BTN / BLUE / PRESSED'],
            boxShadow: '1px 0px 4px rgba(0, 0, 0, 0.15)'
        },
        disabled: {
            backgroundColor: 'transparent',
            borderColor: 'transparent',
            color: colors['DARK GRAY']
        }
    }
};
