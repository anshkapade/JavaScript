

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
console.log(`===================1.employee from TCS ===================`);
  const arrayTcs = arrayEmployee.filter((element)=>{
    return element.emp_company=="TCS";
  })
  console.log(arrayTcs);
  arrayTcs.forEach((element)=>{
    console.log(element);
  })

  console.log(`===================1.average salary of wipro employee===================`);
    
  const arrayWipro= arrayEmployee.filter((element)=>{
        return element.emp_company=="Wipro"
      
  })
  console.log(arrayWipro);

    const sum = arrayWipro.reduce((runningTotal,element)=>{
        return runningTotal+element.emp_salary;
    },0)
    console.log(`sum of salary is : ${sum}`);

    const average = sum/arrayWipro.length;
    console.log(`average is :${average}`);

    
  console.log(`===================1.average salary of wipro or Infy employee===================`);
  const arraySalary = arrayEmployee.filter((element)=>{
    return element.emp_company=="Wipro" || element.emp_company=="Infy"
  })
  console.log(arraySalary);

  const sumSallary = arraySalary.reduce((runningTotal,element)=>{
         return runningTotal+element.emp_salary;
  },0)
  console.log(`sum of salary is :${sumSallary}`);
  
  const average1 = sumSallary/arraySalary.length;
  console.log(`average of salary is :${average1}`);