import { colors } from 'components/color';
import fonts from 'components/font/fonts';

export default {
    'BTN / CANCEL / SMALL / BLUE': {
        normal: {
            ...fonts['Btn-14-R-White'],
            lineHeight: '1',
            padding: '9px 21px 8px',
            height: '34px',
            borderWidth: '2px',
            color: colors['BTN / BLUE'],
            backgroundColor: colors.WHITE,
            borderColor: colors['BTN / BLUE']
        },
        focused: {
            color: colors.WHITE,
            backgroundColor: colors['BTN / BLUE / HOVER'],
            borderColor: colors.WHITE,
            boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.15)'
        },
        hovered: {
            color: colors.WHITE,
            backgroundColor: colors['BTN / BLUE / HOVER'],
            borderColor: colors.WHITE,
            boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.15)'
        },
        pressed: {
            color: colors.WHITE,
            backgroundColor: colors['BTN / BLUE / PRESSED'],
            borderColor: colors.WHITE,
            boxShadow: '0px 0px 4px rgba(0, 0, 0, 0.25)'
        },
        disabled: {
            color: colors['BTN / BLUE / DISABLED'],
            backgroundColor: 'transparent',
            borderColor: colors['BTN / BLUE / DISABLED']
        }
    }
};
