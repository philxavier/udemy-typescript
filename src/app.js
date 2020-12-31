// Code goes here!
var Department = /** @class */ (function () {
    function Department(n) {
        this.employees = [];
        this.name = n;
    }
    Department.prototype.describe = function () {
        console.log("Department: " + this.name);
    };
    Department.prototype.addEmployee = function (employee) {
        this.employees.push(employee);
    };
    Department.prototype.printEmployeeInformation = function () {
        console.log(this.employees.length);
        console.log(this.employees);
    };
    return Department;
}());
var acccounting = new Department("Human Res");
acccounting.addEmployee("Max");
acccounting.addEmployee("Manu");
acccounting.addEmployee("Anne");
acccounting.describe();
acccounting.printEmployeeInformation();
