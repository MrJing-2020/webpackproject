var path = require('path');
var HtmlwebpackPlugin = require('html-webpack-plugin');
var webpack = require('webpack');
    //定义了一些文件夹的路径
var ROOT_PATH = path.resolve(__dirname);
//Template的文件夹路径
var TEM_PATH = path.resolve(ROOT_PATH, 'app/templates');
var APP_PATH = path.resolve(ROOT_PATH, 'app');
var BUILD_PATH = path.resolve(ROOT_PATH, 'app/build');
var MAIN_PATH = path.resolve(ROOT_PATH, 'app/main');

module.exports = {
    //项目的文件夹 可以直接用文件夹名称 默认会找index.js 也可以确定是哪个文件名字
    entry: {
        index: path.resolve(MAIN_PATH, 'index.js'),
        login: path.resolve(MAIN_PATH, 'login.js'),
        vendors: path.resolve(MAIN_PATH, 'vendor.js'),
        style: path.resolve(MAIN_PATH, 'style.js')
            //添加要打包在common里面的库
            // common: ['jquery']
    },
    //输出的文件名 合并以后的js会命名为bundle.js
    output: {
        path: BUILD_PATH,
        // filename: 'bundle.js'
        //修改了bundle.js 用一个数组[name]来代替，他会根据entry的入口文件名称生成多个js文件，这里就是(app.js,vendors.js)
        filename: '[name].js'
    },
    module: {
        loaders: [{
                test: /\.vue$/,
                loader: 'vue-loader'
            }, {
                test: /\.css$/,
                loaders: 'style-loader!css-loader',
                include: APP_PATH
            }, {
                test: /\.(png|jpg)$/,
                loader: 'url-loader?limit=40000'
            }, {
                test: /\.(eot|svg|ttf|woff|woff2)(\?\S*)?$/,
                loader: 'file-loader'
            }, {
                test: /\.js$/,
                loader: 'babel-loader',
                include: APP_PATH,
                query: {
                    presets: ['es2015']
                }
            }, {
                test: /\.(png|jpe?g|gif|svg)(\?\S*)?$/,
                loader: 'file-loader',
                query: {
                    name: '[name].[ext]?[hash]'
                }
            }
            // , {
            //     test: /\.html$/,
            //     loader: 'html-loader!ejs-loader'
            // }
        ]
    },
    devServer: {
        contentBase: "./app",
        historyApiFallback: true,
        hot: true,
        inline: true,
        //progress: true,
        proxy: {
            '/api/*': {
                target: 'http://localhost:5000',
                secure: false
            }
        }
    },
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.esm.js'
        }
    },
    devtool: 'eval-source-map',
    //添加插件 会自动生成一个html文件
    plugins: [
        //这个使用uglifyJs压缩你的js代码
        new webpack.optimize.UglifyJsPlugin({
            minimize: true
        }),
        //把入口文件里面的数组打包成verdors.js
        // new webpack.optimize.CommonsChunkPlugin({
        //     name: 'common',
        //     filename: 'common.js'
        // }),
        //provide $, jQuery and window.jQuery to every script
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            "window.jQuery": "jquery"
        })
        //创建了两个HtmlWebpackPlugin的实例，生成两个页面
        // new HtmlwebpackPlugin({
        //     title: 'Hello World app',
        //     template: path.resolve(TEM_PATH, 'index.html'),
        //     filename: 'index.html',
        //     //chunks这个参数告诉插件要引用entry里面的哪几个入口
        //     chunks: ['style', 'vendors', 'app'],
        //     //要把script插入到标签里
        //     inject: 'body'
        // })
    ]
};

