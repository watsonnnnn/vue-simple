/**
 * Created by Administrator on 2017/6/21.
 */
var path = require('path');
var webpack = require('webpack');
// 直接在命令行中执行webpack时使用的是全局的webpack，要想使用node_modules中的webpack，要在scripts中执行命令。
module.exports = {
    devtool: 'source-map',
    entry: {
        index: './src/main.js',
        todo:'./src/todomain.js'
    },
    output: {
        filename: "[name].js",
        path: path.join(__dirname, '/dist/'),
        publicPath: "/"
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
                test:/\.css$/,
                loaders:['style-loader','css-loader']
            },
            {
                test:/\.less$/,
                use:[{
                    loader: 'style-loader'
                  }, {
                    loader: 'css-loader'
                  }, {
                    loader: 'less-loader', 
                    options: {
                      javascriptEnabled: true,
                      modifyVars: {
                        '@primary-color': '#00cec9'
                      }
                    }
                  }],
                // options: { javascriptEnabled: true }
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
        contentBase:'./dist'//指定根目录
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