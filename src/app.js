// interface Person {
//   name: string;
//   age: number;
var Person = /** @class */ (function () {
    function Person(n) {
        this.age = 30;
        this.name = n;
    }
    Person.prototype.greet = function (phrase) {
        console.log(phrase + " " + this.name);
    };
    return Person;
}());
var user1;
user1 = new Person("Max");
user1.name = "manu";
user1.greet("hi there I am");
