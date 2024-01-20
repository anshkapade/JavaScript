
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

  console.log(`=================1.list of all employee salary===================`);
  const array = arrayEmployee.map((element)=>{
    return element.emp_salary;
  })
   console.log(array);
  

  console.log(`=================2.list of all employee department===================`);
  const array1 = arrayEmployee.map((element)=>{
    return element.emp_dept;
  })
  console.log(array1);

  
  console.log(`=================3.list of all employee IDs===================`);
  const array2 = arrayEmployee.map((element)=>{
    return element.emp_id;
  })
  console.log(array2);