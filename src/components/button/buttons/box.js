import fonts from 'components/font/fonts';
import styles from './utils';

const boxButton = {
    height: '34px',
    lineHeight: '1',
    padding: '9px 25px 8px',
    borderRadius: '4px',
    ...fonts['Btn-14-R-White']
};
const defaultButton = color => styles(boxButton, color);
const chooseButton = color => styles({
    ...boxButton,
    padding: '10px 29px',
    height: '40px'
}, color);
const createButton = color => styles({
    ...boxButton,
    padding: '14px 50px',
    height: '45px',
    width: '204px'
}, color);

export default {
    'BTN / CANCEL / RED': defaultButton('BTN / RED'),
    'BTN / START / BLUE': defaultButton('BTN / BLUE'),
    'BTN / CHOOSE / BLUE': chooseButton('BTN / BLUE'),
    'BTN / CREATE / BLUE': createButton('BTN / BLUE')
};
