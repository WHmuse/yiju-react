import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './static/css/reset.css'
import './static/font/iconfont.css'
import './testMockjs'
import store from './store/index';
import { Provider } from 'react-redux'

let city = localStorage.getItem('yiju-city');
let user = localStorage.getItem('yiju-user')
if(city){
  store.dispatch({
    type:'UPDATECITY',
    payload:city
  })
}
if(user){
  store.dispatch({
    type:'ADDUSER',
    payload:user
  })
}


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);


