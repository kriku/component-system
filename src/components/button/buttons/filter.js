import { colors } from 'components/color';
import fonts from 'components/font/fonts';
import styles from './utils';

const roundButton = {
    borderRadius: '15px',
    boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.15)',
    height: '30px',
    border: 0,
    padding: '8px 16px',
    lineHeight: '1',
    ...fonts['Btn-13-R-White']
};

const filterButton = color => styles(roundButton, color);

export default {
    'BTN / FILTER / BLUE': filterButton('BTN / BLUE'),
    'BTN / FILTER / GREEN': filterButton('BTN / GREEN'),
    'BTN / FILTER / RED': filterButton('BTN / RED')
};
