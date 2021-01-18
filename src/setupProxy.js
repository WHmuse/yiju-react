// import {createProxyMiddleware} from 'http-proxy-middleware';
let {createProxyMiddleware} = require('http-proxy-middleware');

module.exports = function(app){
    app.use(createProxyMiddleware('/api',{
        target:'http://localhost:6000',
        changeOrigin:true,
        pathRewrite:{
            '/api':''
        }
    }))
}