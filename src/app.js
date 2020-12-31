// Code goes here!
var Department = /** @class */ (function () {
    function Department(id, name) {
        this.id = id;
        this.name = name;
        this.employees = [];
    }
    Department.prototype.describe = function () {
        console.log("Department(" + this.id + "): " + this.name);
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
var acccounting = new Department("d1", "Human Res");
acccounting.addEmployee("Max");
acccounting.addEmployee("Manu");
acccounting.addEmployee("Anne");
acccounting.describe();
acccounting.printEmployeeInformation();
