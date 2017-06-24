/**
 * Created by Administrator on 2017/6/21.
 */
var path = require('path');
var webpack = require('webpack');

module.exports = {
    devtool: 'source-map',
    entry: {
        index: './src/main.js',
    },
    output: {
        filename: "[name].js",
        path: path.join(__dirname, '/dist/'),
        publicPath: "/dist/"
    },
    module: {
        loaders: [
            {
                test: /\.(js|jsx)$/, exclude: /node_modules/, loaders: ['babel-loader'],
            },
            {
                test:/\.vue$/,loader:'vue-loader'
            },
            {
                test: /\.(png|jpg|gif)$/,
                loader:'url-loader?limit=8192'
            }
        ]
    },
    devServer: {
        historyApiFallback: true,
        hot: false,
        inline: true,
        port:8081,
        contentBase:'dist'//指定根目录
    },
    plugins: [
        new webpack.LoaderOptionsPlugin({
            options: {
            }
        })

    ],
    resolve: {
        extensions: ['.js', '.jsx','.vue'],
        alias: {
            'vue$': 'vue/dist/vue'
        }
    }
}