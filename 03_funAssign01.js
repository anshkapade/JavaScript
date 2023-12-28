
console.log("=============Step 1============");

function add(){
  console.log("1.Function add with no argument and no return value.");
}
add();

function develope(){
    console.log("2.Function develope with no argument and no return value.");
  }
  develope();

  
console.log("=============Step 2============");

function personalDetails (firstName,lastName,collegeName){
    console.log("First Name :",firstName,"      ","Last Name :", lastName, "     " ,"College Name :",collegeName);
}
personalDetails("Anushri","Kapade","Shivaji University")

console.log("=============Step 3============");

function swapValues(n1,n2){
    console.log("Values before swapping :","n1 ->",n1,"and","n2 ->",n2);
    var temp = n1;
    n1 = n2;
    n2 = temp;
    console.log("Values after swapping :","n1 ->",n1,"and","n2 ->",n2);

}
swapValues("Virat","Anushka");
swapValues(1000,2000);

console.log("=============Step 4============");

function addThreeValues(n1,n2,n3){
    console.log("Given Values are :",n1,n2,n3);
    var addition = n1+n2+n3;
    console.log("Addition is :",addition);

}
 addThreeValues(10.23,600,40);
 addThreeValues("Hello","Good","Morning");