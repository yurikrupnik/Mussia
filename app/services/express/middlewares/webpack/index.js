import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import webpackConfig from '../../../../../webpack.config';
import {env} from '../../../../config/env';
import {initial} from 'lodash';

if (env === 'test') {
    webpackConfig.plugins = initial(webpackConfig.plugins); // last plugin is BrowserSyncPlugin - no reason to start it
}

let compiler = webpack(webpackConfig);
let middleware;

if (env === 'development' || env === 'test') {
    let options = {
        publicPath: '/',
        noInfo: true,
        stats: {
            colors: true,
            hash: true,
            timings: true,
            chunks: true,
            chunkModules: true,
            modules: true
        }
    };
    middleware = [
        webpackHotMiddleware(compiler),
        webpackDevMiddleware(compiler, options)
    ];
} else {
    compiler.run(function () {});
    middleware = function () {};
}

export default (app) => {
    app.use(middleware);
}