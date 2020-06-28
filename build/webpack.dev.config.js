const path = require('path');
const webpack = require('webpack');
const htmlWebpackPlugin = require('html-webpack-plugin');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.config.js');

module.exports = merge(baseConfig, {
    mode: "development",
    entry: {
        app: ['./src/index.js', ]
    },
    output: {
        publicPath: '/'
    },
    plugins: [
        new htmlWebpackPlugin({
            template: 'index.html',
            filename: 'index.html'
        }),
        // new webpack.HotModuleReplacementPlugin()
    ],
    devtool: 'none'
});