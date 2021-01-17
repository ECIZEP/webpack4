const path = require('path');
const webpack = require('webpack');
const htmlWebpackPlugin = require('html-webpack-plugin');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.config.js');
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = merge(baseConfig, {
    mode: "development",
    entry: {
        app: ['./src/index.jsx', ]
    },
    output: {
        publicPath: '/'
    },
    plugins: [
        new htmlWebpackPlugin({
            template: 'index.html',
            filename: 'index.html'
        }),
        // new BundleAnalyzerPlugin()
        new webpack.HotModuleReplacementPlugin()
    ],
    devtool: 'none'
});