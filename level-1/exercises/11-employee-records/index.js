const employees = [];
// Name, Salary, Job title, Status

function Employee(name, salary, jobTitle) {
  this.name = name;
  this.salary = salary;
  this.jobTitle = jobTitle;
  this.status = "Full Time";
}

Employee.prototype.printEmployeeForm = function () {
  console.log(
    `Name: ${this.name}, Job Title: ${this.jobTitle}, Salary: ${this.salary}, Status: ${this.status}`
  );
};

const clint = new Employee("Clint", "$8 / hour", "Boss");
const alisa = new Employee("Alisa", "$5M / hour", "Dog walker");
const pancake = new Employee(
  "Pancake",
  "1 dog bone / hour",
  "head of Corgi operations"
);
pancake.status = "Contract";
clint.status = "Part Time";

employees.push(clint, alisa, pancake);
console.log(employees);
