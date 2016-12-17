

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        // this.data = {fuck: true}
    }

    sayName() {
        console.log('this.name', this.name);
    }

    static create(name, age) {
        return new Person(name, age);
    }
}
class CustomHTMLElement {

    constructor(element) {
        this.element = element;
    }

    get html() {
        return this.element.innerHTML;
    }

    set html(value) {
        this.element.innerHTML = value;
    }
}
debugger
var descriptor = Object.getOwnPropertyDescriptor(CustomHTMLElement.prototype, "html");
console.log("get" in descriptor);   // true
console.log("set" in descriptor);   // true
console.log(descriptor.enumerable); // false

export let person = Person.create('yuri', 33);
