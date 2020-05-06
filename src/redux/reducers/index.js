import {combineReducers} from 'redux';
import {getCorona} from './corona';

export default combineReducers({
    corona_info: getCorona,
});