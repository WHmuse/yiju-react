// 引入创建仓库的方法
import {createStore , applyMiddleware} from 'redux'
import logger from 'redux-logger'
import he from './reducers/he'


const store = createStore(he,applyMiddleware(logger))

export default store;