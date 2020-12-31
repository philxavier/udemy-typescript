// Code goes here!
class Department {
  private employees: string[] = [];

  constructor(private id: string, public name: string) {}

  describe(this: Department) {
    console.log(`Department(${this.id}): ${this.name}`);
  }

  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

const acccounting = new Department("d1", "Human Res");
acccounting.addEmployee("Max");
acccounting.addEmployee("Manu");
acccounting.addEmployee("Anne");

acccounting.describe();
acccounting.printEmployeeInformation();
