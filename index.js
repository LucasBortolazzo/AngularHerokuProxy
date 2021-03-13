const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();

app.use('/api', createProxyMiddleware({ target: 'https://damp-tor-97294.herokuapp.com', changeOrigin: true, onProxyRes: function (proxyRes, req, res) {
  proxyRes.headers['Access-Control-Allow-Origin'] = '*';
} }));
app.use('/auth', createProxyMiddleware({ target: 'https://damp-tor-97294.herokuapp.com', changeOrigin: true}));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

var porta = process.env.PORT || 8080;
app.listen(porta); 