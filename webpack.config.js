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
import autoprefixer from 'autoprefixer';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
export default {
    resolve: {
        extensions: ['.ts', '.tsx', '.js']
    },
    devtool: 'source-map',
    entry: [
        'webpack-hot-middleware/client?reload=true',
        path.join(__dirname, './app/client.js')
    ],
    output: {
        path: path.join(__dirname, './app/public'),
        filename: '[name].js',
        chunkFilename: '[chunkhash].chunk.js',
        publicPath: '/',
    },
    module: {
        loaders: [
            {
                test: /\.(js)$/,
                loaders: ['babel'],
                exclude: /node_modules/,
            },
            {
                test: /\.(css|scss)$/,
                loader: ExtractTextPlugin.extract({
                    fallbackLoader: "style-loader",
                    loader: ['css', 'resolve-url', 'sass?sourceMap','postcss']
                })
            },
            {
                test: /\.ts$/,
                loader: 'awesome-typescript-loader'
            },
            {
                test: /\.(png|woff|woff2|eot|ttf|svg)$/,
                loader: 'file-loader'
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new ExtractTextPlugin({filename: '[name].css', disable: false, allChunks: false}),
        new webpack.NoErrorsPlugin(),
        new BrowserSyncPlugin({
            host: 'localhost',
            port: 3000,
            proxy: 'http://localhost:4000',
            open: false
        })
    ],
    postcss: () => [autoprefixer]
};