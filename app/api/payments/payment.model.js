import {model} from './config';
import mongoose, {Schema} from 'mongoose';


// var PublisherSchema= Schema({
//     _id: {
//         type: String,
//     },
//     name: String,
//     founded: Number,
//     location: String,
// });
//
// let PublisherModel = mongoose.model('Publisher', PublisherSchema);
var PaymentSchema = Schema({
    title: {
        type: String,
        default: 'omg'
        // required: [true, 'must have title']
    },
    company: {
        type: String,
        // required: [true, 'must have company'],
        default: 'google'
    },
    amount: {
        type: Number,
        // required: true,
        min: [1, 'No amount selected'],
        max: [100, 'Maximum amount is 100 for regular customer'],
        default: 1,
        step: 1
    },

    payDate: {
        type: Date,
        default: Date.now
    }
    // author: String,
    // published_date: Date,
    // pages: Number,
    // language: String,
    // publisher_id: {
    //     type: String,
    //     ref: PublisherSchema
    // }
});

let Model = mongoose.model(model, PaymentSchema);

// console.log('Model.schema', Model.schema);

let newPayment1 = new Model({
    title: 'Speakers',
    company: 'focal',
    amount: 1,
    payDate: Date.now()
});
let newPayment2= new Model({
    title: 'Reciver',
    company: 'arcam',
    amount: 2,
    payDate: Date.now()
});
// let publish = new PublisherModel({
//     _id: "oreilly",
//     name: "O'Reilly Media",
//     founded: 1980,
//     location: "CA"
// });
// let publish2 = new PublisherModel({
//     _id: "pearson",
//     name: "Pearson PLC",
//     founded: 1983,
//     location: "UK"
// });
// let payment1 = new Model({
//     title: "50 Tips and Tricks for MongoDB Developer",
//     author: "Kristina Chodorow",
//     published_date: new Date("2011-05-06"),
//     pages: 68,
//     language: "English",
//     publisher_id: "oreilly"
// });
// let payment2 = new Model({
//     title: "MongoDB: The Definitive Guide",
//     author: [ "Kristina Chodorow", "Mike Dirolf" ],
//     published_date: new Date("2010-09-24"),
//     pages: 216,
//     language: "English",
//     publisher_id: "pearson"
// });

// newPayment2.save()
// newPayment1.save()
// publish.save(function (err, res) {
//     if (err) {
//         console.log('err', err);
//
//     }
//     console.log('res', res);
//
// });
// publish2.save();
// payment1.save(function (err, res) {
//     if (err) {
//         console.log('err', err);
//     }
//     console.log('res', res);
// });
// payment2.save(function (err, res) {
//     if (err) {
//         console.log('err', err);
//     }
//     console.log('res', res);
// });
// payment2
// payment.save(func.save(function (err, res) {
//     if (err) {
//         console.log('err', err);
//     }
//     console.log('res', res);
//
//
// });s
// payment2.save();tion (err, res) {
//     if (err) {
//         console.warn('err', err);
//     }
//     console.log('res', res);
// });

// Model
//     .findOne({author: 'Kristina Chodorow'})
//     .populate('publisher_id') // <--
// //     .then(function (err, res) {
// //         if (err) console.log('err', err);
// //
// //
// //         console.log('The creator is %s', res.publisher_id);
// //         // prints "The creator is Aaron"
// //
// //         console.log('The creators age is %s', res.publisher_id);
// //
// //     });
//
//     .exec(function (err, story) {
//         if (err) {
//             console.warn('err', err);
//         }
//         console.log('The creator is %s', story);
//         // prints "The creator is Aaron"
//     })


export default Model;