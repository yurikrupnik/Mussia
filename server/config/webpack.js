import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import webpackConfig from '../../webpack.config';
import {env} from './env';
import initial from 'lodash.initial';

if (env === 'test') {
    webpackConfig.plugins = initial(webpackConfig.plugins); // last plugin is BrowserSyncPlugin - no reason to start it
}

let compiler = webpack(webpackConfig);
let middleware;

if (env === 'development' || env === 'test') {
    let options = {
        publicPath: '/',
        stats: {
            colors: true,
            hash: false,
            timings: true,
            chunks: false,
            chunkModules: false,
            modules: false
        }
    };
    middleware = [
        webpackDevMiddleware(compiler, options),
        webpackHotMiddleware(compiler)
    ];
} else {
    compiler.run(function () {});
    middleware = function () {
    };
}

export default middleware;