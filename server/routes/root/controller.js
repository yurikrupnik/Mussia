import path from 'path';
import config from '../../config/env';

let index = (req, res) => {
//     res.send(`<!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <title>Mussia's</title>
// </head>
// <body>
//
//     <h2 class="yuri nir" id="title">Hello from node</h2>
//
//
//     <div id="root"></div>
//     <!--<script src="http://localhost:8080/webpack-dev-server.js"></script>-->
//     <script src="./public/bundle.js"></script>
//     <script src="http://localhost:8080/bundle.js"></script>
// </body>
// </html>`);
    res.sendFile(path.join(config.root, 'views/index.html'));
};

export {
    index
};