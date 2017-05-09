// to load sass files at refresh
require.extensions['.scss'] = () => {
    return;
};
require.extensions['.css'] = () => {
    return;
};

import path from 'path';
import webpack from 'webpack';
import BrowserSyncPlugin from 'browser-sync-webpack-plugin';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import {env} from './app/config/env';
import _ from 'lodash';

let plugins = [
    new webpack.HotModuleReplacementPlugin(),
    new ExtractTextPlugin({filename: '[name].css', disable: false, allChunks: false}),
    new webpack.NoEmitOnErrorsPlugin()
];

if (env === 'production') {
    plugins = plugins.concat(new webpack.optimize.UglifyJsPlugin());
} else if (env === 'development') {
    plugins = plugins.concat(new BrowserSyncPlugin({
        host: 'localhost',
        port: 3000,
        proxy: 'http://localhost:4000',
        open: false
    }));
} else if (env === 'test') {
    plugins = _.initial(plugins);
}




export default {
    resolve: {
        extensions: ['.ts', '.tsx', '.js']
    },
    devtool: 'source-map',
    entry: [
        path.join(__dirname, './app/client.js')
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
                use: 'babel-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.(css|scss)$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: ['css-loader', 'sass-loader?sourceMap', 'postcss-loader']
                })
            },
            {
                test: /\.ts$/,
                use: 'awesome-typescript-loader'
            },
            {
                test: /\.(png|jpeg|woff|woff2|eot|ttf|svg)$/,
                use: 'file-loader'
            }
        ]
    },
    plugins: plugins
};