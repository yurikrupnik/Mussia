class Greeter {
    constructor(public greeting: string) { }
    // greet() {
    //     return "<h1>" + this.greeting + "</h1>";
    // }
}

let greeter = new Greeter('ds');

class Persong {
    constructor(public name:string){
        this.name = name
    }

    static teble = 'table;';
}

var person = new Persong('yuri');
// console.log('person', person);

export {
    greeter
}