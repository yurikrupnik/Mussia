import path from 'path';
import webpack from 'webpack';
import BrowserSyncPlugin from 'browser-sync-webpack-plugin';
import autoprefixer from 'autoprefixer';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
export default {
    // Currently we need to add '.ts' to the resolve.extensions array.
    // js Must be present
    resolve: {
        extensions: ['.ts', '.tsx', '.js']
    },
    // devtool: 'eval-source-map', // todo check this and the difference now- does not work in browser
    devtool: 'source-map',
    entry: [
        'webpack-hot-middleware/client?reload=true',
        path.join(__dirname, './app/client.js')
    ],
    output: {
        path: path.join(__dirname, './app/public'),
        filename: '[name].js',
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
                    loader: "css!sass!postcss"
                })
            },
            {
                test: /\.ts$/,
                loader: 'awesome-typescript-loader'
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new ExtractTextPlugin({filename: 'styles.css', disable: false, allChunks: true}),
        new webpack.NoErrorsPlugin(),
        new BrowserSyncPlugin({
            host: 'localhost',
            port: 3000,
            proxy: 'http://localhost:4000',
            open: false // no auto open so browser will not open at every change
        })
    ],
    postcss: () => [autoprefixer]
};