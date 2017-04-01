import db from '../../config/db';
let model = db.get('payments');
let model2 = db.get('payment');
console.log('model', model);
console.log('model2', model2);

export default model;

