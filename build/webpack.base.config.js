const path = require('path');
const webpack = require('webpack');

module.exports = {
    mode: "development",
    output: {
        path: path.resolve(__dirname, '../dist/'),
        filename: '[name].[hash:8].js',
        chunkFilename: '[name].[hash:8].js'
    },
    resolve: {
        //后缀名自动补全
        extensions: ['.js', '.jsx', '.less', '.scss', '.css'],
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: [/node_modules/],
                type: 'javascript/auto',
                use: 'babel-loader'
            },
            {
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
            },
            {
                test: /\.(png|jpg|gif|jpeg)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 10240
                        }
                    }
                ]
            },
            {
                test:  /\.(ttf|eot|svg|woff)(\?\S*)*$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 10240
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new webpack.BannerPlugin(new Date().getFullYear() + '年' + parseInt(new Date().getMonth() + 1, 10) + '月' + new Date().getDate() + '日' + new Date().getHours() + '点' + new Date().getMinutes() + '分' + '编译')
    ]
}