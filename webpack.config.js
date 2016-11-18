import path from 'path';
import webpack from 'webpack';
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
    ]
};