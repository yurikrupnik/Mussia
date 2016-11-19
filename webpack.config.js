import path from 'path';
import webpack from 'webpack';
import BrowserSyncPlugin from 'browser-sync-webpack-plugin';
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
            {test: /\.js$/, loader: 'babel', exclude: /node_modules/,}
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
        new BrowserSyncPlugin({
            // browse to http://localhost:3000/ during development,
            host: 'localhost',
            port: 3000,
            proxy: 'http://localhost:4000',
        },
            // plugin options
            {
                // prevent BrowserSync from reloading the page
                // and let Webpack Dev Server take care of this
                reload: false
            })
    ]
};