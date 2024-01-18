
class Employee{
    constructor (emp_id, emp_name, emp_dept, emp_salary, emp_company){
        this.emp_id = emp_id;
        this.emp_name = emp_name;
        this.emp_dept = emp_dept;
        this.emp_salary = emp_salary;
        this.emp_company = emp_company;
    }

    // Member Functions or methods
    getDetails(){
        console.log(`ID: ${this.emp_id}, NAME: ${this.emp_name}, DEPT: ${this.emp_dept}, SALARY: ${this.emp_salary},COMPANY :${this.emp_company}`);
     } 
     details (){
        console.log(`NAME : ${this.emp_name},SALARY : ${this.emp_salary},COMPANY :${this.emp_company}`);
     }
 }


const emp_anil = new Employee(22,"Anil","IT",50000,"TCS")
const emp_radha = new Employee(33,"Radha","HR",74000,"Wipro")
const emp_rishi = new Employee(55,"Rishi","FINANCE",47000,"TCS")
const emp_sonali = new Employee(66,"Sonali","FINANCE",45000,"Infy")
const emp_monika = new Employee(77,"Monika","IT",40000,"Wipro")
const emp_viny = new Employee(88,"Vinayak","IT",75000,"TCS")
const emp_mahi = new Employee(99,"Mahesh","HR",85000,"Infy")
const arrayEmployee = [emp_anil,emp_radha,emp_rishi,emp_sonali,emp_monika,emp_viny,emp_mahi]

console.log(`======1.Employee working in TCS================`);
for (const element of arrayEmployee) {
    if (element.emp_company=='TCS') {
        element.getDetails(); 
    } 
}

console.log(`======2.Employee from finance dept================`);
for (const element of arrayEmployee) {
    if (element.emp_dept=='FINANCE') {
        element.getDetails(); 
    } 
}

console.log(`======3.Employee name start with "R"================`);
for (const element of arrayEmployee) {
    if (element.emp_name.startsWith("R")) {
        element.getDetails(); 
    } 
}

console.log(`======4.Employee salary greater than 75000===============`);
for (const element of arrayEmployee) {
    if (element.emp_salary > 75000) {
        element.details(); 
    } 
}


console.log(`======5.Employee salary greater than equal to 50000 AND dept is IT================`);
for (const element of arrayEmployee) {
    if (element.emp_salary >=50000 && element.emp_dept=="IT") {
        element.getDetails();
    } 
}

console.log(`======6.Employee from companyn Infy================`);
for (const element of arrayEmployee) {
    if (element.emp_company=="Infy") {
        element.getDetails();
    } 
}