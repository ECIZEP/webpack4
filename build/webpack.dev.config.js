const path = require('path');
const webpack = require('webpack');
const htmlWebpackPlugin = require('html-webpack-plugin');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.config.js');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = merge(baseConfig, {
    mode: "development",
    entry: {
        app: ['./test/index.js', /* 'webpack-hot-middleware/client?path=/__hmr&reload=true' */]
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
        // new webpack.HotModuleReplacementPlugin()
    ],
    devtool: 'none'
});