class Greeter {
    constructor(public greeting: string) { }
    greet() {
        return "<h1>" + this.greeting + "</h1>";
    }
}

let greeter = new Greeter("Hello, world!");

export {
    greeter
}