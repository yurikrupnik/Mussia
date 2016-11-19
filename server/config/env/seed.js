// import Payment from '../api/payment/payment.model';
// import {createSeedByModel} from '../data/fake';

Payment.find({}).remove()
    .then(() => createSeedByModel(Payment));