class Employee {
  constructor(emp_id, emp_name, emp_dept, emp_salary, emp_company) {
    this.emp_id = emp_id;
    this.emp_name = emp_name;
    this.emp_dept = emp_dept;
    this.emp_salary = emp_salary;
    this.emp_company = emp_company;
  }

  // Member Functions or methods
  getDetails() {
    console.log(
      `ID: ${this.emp_id}, NAME: ${this.emp_name}, DEPT: ${this.emp_dept}, SALARY: ${this.emp_salary},COMPANY :${this.emp_company}`
    );
  }
}

const emp_anil = new Employee(22, "Anil", "IT", 50000, "TCS");
const emp_radha = new Employee(33, "Radha", "HR", 74000, "Wipro");
const emp_rishi = new Employee(55, "Rishi", "FINANCE", 47000, "TCS");
const emp_sonali = new Employee(66, "Sonali", "FINANCE", 45000, "Infy");
const emp_monika = new Employee(77, "Monika", "IT", 40000, "Wipro");
const emp_viny = new Employee(88, "Vinayak", "IT", 75000, "TCS");
const emp_mahi = new Employee(99, "Mahesh", "HR", 85000, "Infy");
const arrayEmployee = [
  emp_anil,
  emp_radha,
  emp_rishi,
  emp_sonali,
  emp_monika,
  emp_viny,
  emp_mahi,
];

console.log(`================1.all employee of wipro==============`);

const array = arrayEmployee.filter((element) => {
  return element.emp_company == "Wipro";
});
console.log(array);
array.forEach((element) => {
  console.log(element);
});

console.log(`================2.all employee of IT or HR dept==============`);
const arrayDept = arrayEmployee.filter((element) => {
  return element.emp_dept == "IT" || element.emp_dept == "HR";
});
console.log(arrayDept);
arrayDept.forEach((element) => {
  console.log(element);
});

console.log(
  `================3.all employee whose ID greater than 50==============`
);
const arrayId = arrayEmployee.filter((element) => {
  return element.emp_id > 50;
});
console.log(arrayId);
arrayId.forEach((element) => {
  console.log(element);
});

console.log(
  `================4.all employee whose name starts with A/V/M==============`
);
const arrayName = arrayEmployee.filter((element) => {
  return (
    element.emp_name.startsWith(`A`) ||
    element.emp_name.startsWith(`V`) ||
    element.emp_name.startsWith(`M`)
  );
});
console.log(arrayName);
arrayName.forEach((element) => {
  console.log(element);
});

console.log(`================5.all employee average salary==============`);
const array1 = arrayEmployee.filter((element) => {
  return element.emp_salary;
});
console.log(array1);

const sumSalary = array1.reduce((runningTotal, element) => {
  return runningTotal + element.emp_salary;
}, 0);
console.log(`sum of salary is :${sumSalary}`);

const avg = sumSalary / array1.length;
console.log(`average of salary is :${avg}`);

console.log(
  `================6.all employee average salary from IT dept==============`
);
const array2 = arrayEmployee.filter((element) => {
  return element.emp_dept == "IT";
});
console.log(array2);

const arraySum = array2.reduce((runningTotal, element) => {
  return runningTotal + element.emp_salary;
}, 0);
console.log(`sum of salary is :${arraySum}`);

const avg1 = arraySum / array2.length;
console.log(`average of salary is :${avg1}`);
