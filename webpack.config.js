import path from 'path';
import webpack from 'webpack';
import BrowserSyncPlugin from 'browser-sync-webpack-plugin';
import autoprefixer from 'autoprefixer';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
export default {
    devtool: 'eval-source-map',
    entry: [
        'webpack-hot-middleware/client?reload=true',
        path.join(__dirname, './client/app.js')
    ],
    output: {
        path: path.join(__dirname, './client/public'),
        filename: '[name].js',
        publicPath: '/public'
    },
    module: {
        loaders: [
            {test: /\.js$/, loader: 'babel', exclude: /node_modules/,},
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract({
                    // fallbackLoader: "style-loader",
                    loader: "css-loader!sass-loader"
                })
                // loaders: [
                //     'style',
                //     'css',
                //     'sass',
                //     'postcss'
                // ]

            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new ExtractTextPlugin({ filename: 'styles.css', disable: false, allChunks: true }),
        new webpack.NoErrorsPlugin(),
        new BrowserSyncPlugin({
            // browse to http://localhost:3000/ during development,
            host: 'localhost',
            port: 3000,
            proxy: 'http://localhost:4000',
            open: false // no auto open
        })
    ],
    // postcss: () => [autoprefixer]
};