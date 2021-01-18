import { combineReducers } from 'redux';

import city from './city'
import user from './user'

const he = combineReducers({city,user});

export default he;