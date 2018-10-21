import colors from 'components/color/colors';

const normalFont = {
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontHeight: 'normal',
    color: colors.Black
};

const Montserrat = {
    ...normalFont,
    fontFamily: 'Montserrat'
};

const Roboto = {
    ...normalFont,
    fontFamily: 'Roboto'
};

const OpenSans = {
    ...normalFont,
    fontFamily: 'Open Sans'
};

const textStyles = {
    Montserrat: {
        ...Montserrat,
        color: 'inherit',
        fontSize: 'inherit'
    },
    Roboto: {
        ...Roboto,
        color: 'inherit',
        fontSize: 'inherit'
    },
    'Open Sans': {
        ...OpenSans,
        color: 'inherit',
        fontSize: 'inherit'
    },
    'Head-27-M-Dark-Blue': {
        ...Montserrat,
        color: colors['DARK BLUE'],
        fontSize: '27px'
    },
    'Head-21-M-Black': {
        ...Montserrat,
        fontSize: '21px'
    },
    'Head-19-M-Dark-Blue': {
        ...Montserrat,
        color: colors['DARK BLUE'],
        fontSize: '19px',
        letterSpacing: '-1px'
    },
    'Head-17-M-Dark-Blue': {
        ...Montserrat,
        color: colors['DARK BLUE'],
        fontSize: '17px',
        fontWeight: '500'
    },
    'Head-15-M-Dark-Blue': {
        ...Montserrat,
        color: colors['DARK BLUE'],
        fontSize: '15px'
    },
    'Head-15-M-Black': {
        ...Montserrat,
        fontSize: '15px'
    },
    'Head-13-OS-Semibold-Dark-Gray': {
        ...Montserrat,
        color: colors['DARK GRAY'],
        fontSize: '13px',
        fontWeight: '600'
    },
    'Head-13-OS-Semibold-Black': {
        ...Montserrat,
        fontSize: '13px',
        fontWeight: '600'
    },
    'Context-Menu-15-R-Black': {
        ...Roboto,
        fontSize: '15px'
    },
    'Body-15-OS-Black': {
        ...OpenSans,
        fontSize: '15px'
    },
    'Body-13-OS-Black': {
        ...OpenSans,
        fontSize: '13px'
    },
    'Body-13-OS-Black_90': {
        ...OpenSans,
        fontSize: '13px',
        lineHeight: '90%'
    },
    'Head-Text-Field-14-OS-Semibold-Black': {
        ...OpenSans,
        fontSize: '14px',
        fontWeight: '600'
    },
    'Body-Text-Field-14-OS-Black': {
        ...OpenSans,
        fontSize: '14px'
    },
    'Subhead-Text-Field-13-OS-Semibold-Blue': {
        ...OpenSans,
        color: colors.BLUE,
        fontSize: '14px'
    },
    'Subhead-Text-Field-13-OS-Light-Black-Disabled': {
        ...OpenSans,
        color: colors['LIGHT BLACK'],
        fontSize: '13px'
    },
    'Head-Text_Field_14-OS-Light-Black-Disabled': {
        ...OpenSans,
        color: colors['LIGHT BLACK'],
        fontSize: '14px'
    },
    'Head-Text-Field-14-OS-Semibold-Light-Black-Disabled': {
        ...OpenSans,
        color: colors['LIGHT BLACK'],
        fontWeight: '600',
        fontSize: '14px'
    },
    'Subhead-15-OS-Semibold-Black': {
        ...OpenSans,
        color: colors['LIGHT BLACK'],
        fontWeight: '600',
        fontSize: '15px'
    },
    'Subhead-11-OS-Black': {
        ...OpenSans,
        fontSize: '11px'
    },
    'Numbers-11-Green': {
        ...OpenSans,
        color: colors.GREEN,
        fontSize: '11px'
    },
    'Numbers-11-Gray': {
        ...OpenSans,
        color: colors['DARK GRAY'],
        fontWeight: '600',
        fontSize: '11px'
    },
    'Btn-14-R-White': {
        ...Roboto,
        color: colors.WHITE,
        fontSize: '14px'
    },
    'Btn-14-R-Blue': {
        ...Roboto,
        color: colors.BLUE,
        fontSize: '14px'
    },
    'Btn-13-R-White': {
        ...Roboto,
        color: colors.WHITE,
        fontSize: '13px'
    },
    'Btn-14-R-Bold-White': {
        ...Roboto,
        color: colors.WHITE,
        fontSize: '14px'
    },
    'Btn-14-R-Disabled': {
        ...Roboto,
        color: colors['BTN / BLUE / DISABLED'],
        fontSize: '14px'
    },
    'Data-13-OS-90': {
        ...OpenSans,
        color: colors['DARK GRAY'],
        fontSize: '13px'
    }
};

export default textStyles;
