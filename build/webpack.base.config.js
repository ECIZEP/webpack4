const path = require('path');
const webpack = require('webpack');

module.exports = {
    mode: "development",
    output: {
        path: path.resolve(__dirname, '../dist/'),
        filename: '[name].[hash:8].js',
        chunkFilename: '[name].[hash:8].js'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: [/node_modules/],
                type: 'javascript/auto',
                use: 'babel-loader'
            }, {
                test: /\.(less|css)$/,
                exclude:[/node_modules/],
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 2
                        }
                    },
                    'postcss-loader',
                    'less-loader'
                ]
            }
        ]
    },
    plugins: [
        new webpack.BannerPlugin(new Date().getFullYear() + '年' + parseInt(new Date().getMonth() + 1, 10) + '月' + new Date().getDate() + '日' + new Date().getHours() + '点' + new Date().getMinutes() + '分' + '编译')
    ]
}