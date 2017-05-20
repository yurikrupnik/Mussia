import {model} from './config';
import mongoose, {Schema} from 'mongoose';


var PublisherSchema= Schema({
    _id: String,
    name: String,
    founded: Number,
    location: String,
});

var PaymentSchema = Schema({
    title: String,
    author: String,
    published_date: Date,
    pages: Number,
    language: String,
    publisher_id: {
        type: String,
        ref: PublisherSchema
    }
});

let Model = mongoose.model(model, PaymentSchema);
let PublisherModel = mongoose.model('Publisher', PublisherSchema);


let publish = new PublisherModel({
    _id: "oreilly",
    name: "O'Reilly Media",
    founded: 1980,
    location: "CA"
});
let publish2 = new PublisherModel({
    _id: "pearson",
    name: "Pearson PLC",
    founded: 1983,
    location: "UK"
});
let payment1 = new Model({
    title: "50 Tips and Tricks for MongoDB Developer",
    author: "Kristina Chodorow",
    published_date: new Date("2011-05-06"),
    pages: 68,
    language: "English",
    publisher_id: "oreilly"
});
let payment2 = new Model({
    title: "MongoDB: The Definitive Guide",
    author: [ "Kristina Chodorow", "Mike Dirolf" ],
    published_date: new Date("2010-09-24"),
    pages: 216,
    language: "English",
    publisher_id: "pearson"
});


// publish.save();
// publish2.save();
// payment1.save(function (err, res) {
//     if (err) {
//         console.log('err', err);
//     }
//     console.log('res', res);
//
//
// });
// payment2.save(function (err, res) {
//     if (err) {
//         console.log('err', err);
//     }
//     console.log('res', res);
//
//
// });
// payment2.save();
// payment.save(function (err, res) {
//     if (err) {
//         console.warn('err', err);
//     }
//     console.log('res', res);
// });

export default Model;