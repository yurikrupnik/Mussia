import Payment from '../../api/payments/payment.model';
// import {createSeedByModel} from '../data/fake';

import faker from 'faker';
import range from 'lodash.range';

class FakeDataWithIndex {
    constructor(index) {
        this.name = faker.name.findName();
        this.info = faker.lorem.sentences();
        this.avatar = faker.image.avatar();
        this.image = faker.image.image();
        this.id = index;
    }
}

function createNewFaker(v, i) {
    return new FakeDataWithIndex(i);
}

export const createSeedByModel = (Model, count) => {
    const seed = Array.from(range(0, count), createNewFaker) || [];
    Model && Model.create(seed);
};


// export default FakeDataWithIndex;

Payment.find({}).remove()
    .then(() => createSeedByModel(Payment, 50));