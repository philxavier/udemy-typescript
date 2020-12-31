// Code goes here!
class Department {
  name: string;
  private employees: string[] = [];

  constructor(n: string) {
    this.name = n;
  }

  describe() {
    console.log("Department: " + this.name);
  }

  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

const acccounting = new Department("Human Res");
acccounting.addEmployee("Max");
acccounting.addEmployee("Manu");
acccounting.addEmployee("Anne");

acccounting.describe();
acccounting.printEmployeeInformation();
