const webpack = require('webpack');
const path = require('path');
const devMiddleWare = require('webpack-dev-middleware');
const hotMiddleware = require('webpack-hot-middleware');
const devConfig = require('./webpack.dev.config.js');

const express = require('express');
const app = express();

const historyApiFallback = require('connect-history-api-fallback');
app.use(historyApiFallback());

const devCompiler = webpack(devConfig);
app.use(devMiddleWare(devCompiler, {
    publicPath: devConfig.output.publicPath,
    quiet: true
}));

app.use(hotMiddleware(devCompiler, {
    path: '/__hmr',
    heartbeat: 2000
}))

app.get('*', (req, res, next) => {
    console.log(req.url);
    next();
})
app.listen(3001);