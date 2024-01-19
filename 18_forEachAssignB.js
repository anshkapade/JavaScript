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

console.log(
  `=========================1.employee from TCS========================`
);
arrayEmployee.forEach((element) => {
  if (element.emp_company == "TCS")
    console.log(`name :${element.emp_name} , company: ${element.emp_company}`);
});

console.log(
  `=========================2.employee with salary greater than equal to 50000========================`
);
arrayEmployee.forEach((element) => {
  if (element.emp_salary >= 50000) console.log(element);
});

console.log(
  `=========================3.sum of all employee salary========================`
);
let sum = 0;
arrayEmployee.forEach((element) => {
  sum += element.emp_salary;
});
console.log(`total sum of salary :${sum}`);

console.log(
  `=========================4.average of employee salary========================`
);

arrayEmployee.forEach((element) => {
  sum;
});
const average = sum / arrayEmployee.length;
console.log(`average of salary is :${average}`);

console.log(
  `=========================5.employee from HR or IT dept eith salary geater than equal to 75000========================`
);
arrayEmployee.forEach((element) => {
  if (
    (element.emp_salary >= 75000 && element.emp_dept == "IT") ||
    (element.emp_salary >= 75000 && element.emp_dept == "HR")
  )
    console.log(element);
});
