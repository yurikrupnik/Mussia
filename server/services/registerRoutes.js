import fs from 'fs';
import path from 'path';
import {root} from '../config/env';
import foreach from 'lodash.foreach';
let apiPath = path.join(root, 'api');

// bad idea but nice try, need to learn buffer
// see http://stackoverflow.com/questions/20018588/how-to-monitor-the-memory-usage-of-node-js for memory usage

let readApiFolders = (folders) => {
    foreach(folders, function (file) {
        let folderPath = path.join(apiPath, file);
        fs.readdir(folderPath, function (err) {
            if (err) {
                return console.error('err', err);
            }

            let buf = Buffer;
            // let fileData = require(fileText);

            let fileData = fs.readFile(path.join(folderPath, 'index.js'), function (err, res) {
                if (err) {
                    return console.error('err', err);
                }

                console.log('res', res);

            });


            // let fileBuffer = Buffer.;
            // let jsonObject = fileData.toJSON();

            console.log('fileData', fileData);

            // let fileText = result.toString/();

            // });


        });

    });
};

fs.readdir(apiPath, function (err, apiFolders) {
    if (err) {
        return console.error('err', err);
    }
    readApiFolders(apiFolders);
    // console.log('data sync: ', data);

    // }


});

