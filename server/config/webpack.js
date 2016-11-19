import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import webpackConfig from '../../webpack.config';
import {env} from './env';

let compiler = webpack(webpackConfig);
let middleware;

if (env === 'development') {
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
    middleware =[
        webpackDevMiddleware(compiler, options),
        webpackHotMiddleware(compiler)
    ];
} else {
    compiler.run(function () {
        
    });
    middleware = function () {};
}

export default middleware;