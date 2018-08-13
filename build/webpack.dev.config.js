const path = require('path');
const webpack = require('webpack');
const htmlWebpackPlugin = require('html-webpack-plugin');
const cleanWebpackPlugin = require('clean-webpack-plugin');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.config.js');

module.exports = merge(baseConfig, {
    mode: "development",
    entry: {
        app: ['./src/index.jsx', 'webpack-hot-middleware/client?path=/__hmr&noInfo=true&reload=true']
    },
    output: {
        publicPath: '/'
    },
    plugins: [
        new htmlWebpackPlugin({
            template: 'index.html',
            filename: 'index.html'
        }),
        new cleanWebpackPlugin('dist/', {
            // 项目根目录
            root: path.resolve(__dirname, '../'),
            verbose: true
        }),
        new webpack.HotModuleReplacementPlugin()
    ],
    devtool: 'none'
});

/* 
        new cleanWebpackPlugin('dist/', {
            // 项目根目录
            root: path.resolve(__dirname, '../'),
            verbose: true
        }),
*/