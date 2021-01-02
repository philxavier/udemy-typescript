var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// Code goes here!
var Department = /** @class */ (function () {
    function Department(id, name) {
        this.id = id;
        this.name = name;
        this.employees = [];
    }
    Department.createEmployee = function (name) {
        return { name: name };
    };
    Department.prototype.addEmployee = function (employee) {
        this.employees.push(employee);
        if (name === "Max") {
            return;
        }
        this.employees.push(name);
    };
    Department.prototype.printEmployeeInformation = function () {
        console.log(this.employees.length);
        console.log(this.employees);
    };
    Department.fiscalYear = 2020;
    return Department;
}());
var ITDepartment = /** @class */ (function (_super) {
    __extends(ITDepartment, _super);
    function ITDepartment(id, admins) {
        var _this = _super.call(this, id, "IT") || this;
        _this.admins = admins;
        return _this;
    }
    ITDepartment.prototype.describe = function () {
        console.log("IT Department- ID: ", this.id);
    };
    return ITDepartment;
}(Department));
var employee1 = Department.createEmployee("Max");
console.log(employee1, Department.fiscalYear);
var it = new ITDepartment("d1", ["Max"]);
it.addEmployee("Max");
it.addEmployee("Manu");
it.addEmployee("Anne");
it.describe();
it.name = "NEW NAME";
// it.printEmployeeInformation();
console.log(it);
var AccountingDepartment = /** @class */ (function (_super) {
    __extends(AccountingDepartment, _super);
    function AccountingDepartment(id, reports) {
        var _this = _super.call(this, id, "IT") || this;
        _this.reports = reports;
        _this.lastReport = reports[0];
        return _this;
    }
    Object.defineProperty(AccountingDepartment.prototype, "mostRecentReport", {
        get: function () {
            if (this.lastReport) {
                return this.lastReport;
            }
            throw new Error("No report found");
        },
        set: function (value) {
            if (!value) {
                throw new Error("Please pass in a valid value");
            }
            this.addReport(value);
        },
        enumerable: true,
        configurable: true
    });
    AccountingDepartment.getInstance = function () {
        if (this.instance) {
            return this.instance;
        }
        this.instance = new AccountingDepartment("d2", []);
        return this.instance;
    };
    AccountingDepartment.prototype.describe = function () {
        console.log("accounting deparment - id: " + this.id);
    };
    AccountingDepartment.prototype.addEmployee = function (name) {
        if (name === "max") {
            return;
        }
        this.employees.push(name);
    };
    AccountingDepartment.prototype.addReport = function (text) {
        this.reports.push(text);
        this.lastReport = text;
    };
    AccountingDepartment.prototype.printReports = function () {
        console.log(this.reports);
    };
    return AccountingDepartment;
}(Department));
var accounting = AccountingDepartment.getInstance();
var accounting2 = AccountingDepartment.getInstance();
accounting.mostRecentReport = "cool";
console.log(accounting.mostRecentReport);
accounting.addReport("Something went wrong ...");
accounting.addEmployee("Max");
accounting.addEmployee("test");
// accounting.printReports();
accounting.describe();
