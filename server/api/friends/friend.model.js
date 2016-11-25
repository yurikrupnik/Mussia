import mongoose, {Schema, model} from 'mongoose';


class Friend {
    constructor({name, age, created_on}) {
        this.name = name;
        this.age = age;
        this.created_on = created_on;
    }
}


let friendMock = new Friend({
    name: 'Aviv',
    age: 30,
    created_on: new Date()
});


let FriendSchema = new Schema({
    name: String,
    age: Number,
    created_on: Date,
    // friends: Array,
    // tags: { type: [String], index: true }
});

// console.log('FriendSchema', FriendSchema);
// console.log('mongoose', mongoose);



// export default model('Friend', FriendSchema);
