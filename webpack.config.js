/**
 * Created by Administrator on 2017/6/21.
 */
var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: {
        index: './main.js'
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
    },
    plugins: [
        new webpack.LoaderOptionsPlugin({
            options: {
                vue: {
                    loaders: {
                        css: 'style-loader!css-loader?sourceMap'
                    }
                }
            }
        })

    ],
    resolve: {
        extensions: ['.js', '.jsx','.vue'],
    }
}