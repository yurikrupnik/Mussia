

var path = require('path');
var webpack = require('webpack');
var BrowserSyncPlugin = require('browser-sync-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
// var env = require('./app/config/env');
//
// // import {env} from './app/config/env';
//
// let plugins = [
//     new webpack.HotModuleReplacementPlugin(),
//     new ExtractTextPlugin({filename: '[name].css', disable: false, allChunks: false}),
//     new webpack.NoEmitOnErrorsPlugin()
// ];
//
// if (env.env === 'production') {
//     plugins = plugins.concat(new webpack.optimize.UglifyJsPlugin());
// } else if (env.env === 'development') {
//     plugins = plugins.concat(new BrowserSyncPlugin({
//         host: 'localhost',
//         port: 3000,
//         proxy: 'http://localhost:4000',
//         open: false
//     }));
// } else if (env.env === 'test') {
//     plugins = _.initial(plugins);
// }




module.exports = {
    context: path.join(__dirname, './app'),
    target: 'node',
    resolve: {
        extensions: ['.ts', '.tsx', '.js']
    },
    devtool: false,
    entry: [
        './components/Smart/index.js'
    ],
    output: {
        path: path.join(__dirname, './app/public'),
        filename: '[name].js',
        chunkFilename: '[chunkhash].chunk.js',
        publicPath: '/',
    },
    module: {
        rules: [
            {
                test: /\.(js)$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
            }
        ]
    },
    plugins: []
};