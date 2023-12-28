



function square(num){
    console.log("Given no.is :",num);
    var result= num*num;
    console.log("Square is :",result);
}
square(7);
square(9);
square(11);

function multiply (n1,n2,n3){
    console.log("given no. are :",n1,n2,n3);
    var result = n1*n2*n3;
    console.log("multiplication is :" , result);
}
multiply(2,3,4);

function multiply (n1,n2,n3){
    console.log("given no. are :",n1,n2,n3);
    var result = n1*n2*n3;
    return result;
}
var resultValue = multiply(1,2,3);
console.log("multiplication is :" , resultValue);

function swap (n1,n2){
    console.log("values before swapping :","n1 ->",n1,"and","n2 ->", n2);
    var temp = n1;
    n1 = n2;
    n2 = temp;
    console.log("values after swapping :","n1 ->",n1,"and","n2 ->",n2);
}
swap(2,3);


